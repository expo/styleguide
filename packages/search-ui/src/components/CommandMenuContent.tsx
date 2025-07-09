import { SearchSmIcon } from '@expo/styleguide-icons/outline/SearchSmIcon';
import { Stars02Icon } from '@expo/styleguide-icons/outline/Stars02Icon';
import { XIcon } from '@expo/styleguide-icons/outline/XIcon';
import { KapaProvider, useChat } from '@kapaai/react-sdk';
import { Command } from 'cmdk';
import groupBy from 'lodash.groupby';
import React, { useEffect, useState } from 'react';

import { BarLoader } from './BarLoader';
import { CommandFooter } from './CommandFooter';
import { CommandItemBaseWithCopy } from './CommandItemBaseWithCopy';
import { RNDirectoryItem, RNDocsItem, ExpoDocsItem } from '../Items';
import { ExpoBlogItem } from '../Items/ExpoBlogItem';
import { RNDirectoryItemType, AlgoliaItemType, CommandMenuProps, ExpoBlogItemType } from '../types';
import {
  getExpoDocsResults,
  getRNDocsResults,
  getDirectoryResults,
  getItemsAsync,
  isAppleDevice,
  getExpoBlogResults,
  getSanityItemsAsync,
} from '../utils';
import { AIPromptResult } from './AIPromptResult';

export const CommandMenuContent = ({
  config: { docsVersion, docsTransformUrl },
  open,
  setOpen,
  customSections = [],
}: CommandMenuProps) => {
  const [initialized, setInitialized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [isMac, setIsMac] = useState<boolean | null>(null);
  const [isPromptMode, setPromptMode] = useState(false);

  const {
    conversation,
    submitQuery,
    isGeneratingAnswer,
    isPreparingAnswer,
    addFeedback,
    stopGeneration,
    resetConversation,
  } = useChat();

  const [expoDocsItems, setExpoDocsItems] = useState<AlgoliaItemType[]>([]);
  const [expoBlogItems, setExpoBlogItems] = useState<ExpoBlogItemType[]>([]);
  const [rnDocsItems, setRnDocsItems] = useState<AlgoliaItemType[]>([]);
  const [directoryItems, setDirectoryItems] = useState<RNDirectoryItemType[]>([]);

  const getExpoDocsItems = async () => getItemsAsync(query, getExpoDocsResults, setExpoDocsItems, docsVersion);
  const getExpoBlogItems = async () => getSanityItemsAsync(query, getExpoBlogResults, setExpoBlogItems);
  const getRNDocsItems = async () => getItemsAsync(query, getRNDocsResults, setRnDocsItems);
  const getDirectoryItems = async () => getItemsAsync(query, getDirectoryResults, setDirectoryItems);

  const dismiss = () => setOpen(false);

  const fetchData = (callback: () => void) => {
    Promise.all([
      getExpoDocsItems(),
      getExpoBlogItems(),
      getRNDocsItems(),
      getDirectoryItems(),
      ...customSections?.map((section) => section.getItemsAsync(query)),
    ]).then(callback);
  };

  const onQueryChange = () => {
    if (open) {
      setLoading(true);
      setPromptMode(false);

      if (isPreparingAnswer || isGeneratingAnswer) {
        stopGeneration();
        resetConversation();
      }

      const inputTimeout = setTimeout(() => fetchData(() => setLoading(false)), 150);
      return () => clearTimeout(inputTimeout);
    }
  };

  const onMenuOpen = () => {
    if (open && !initialized) {
      fetchData(() => {
        setInitialized(true);
        setLoading(false);
      });
    }
  };

  useEffect(() => {
    setIsMac(typeof navigator !== 'undefined' && isAppleDevice());
  }, []);

  useEffect(() => {
    if (isMac !== null) {
      const keyDownListener = (event: KeyboardEvent) => {
        if (event.key === 'k' && (isMac ? event.metaKey : event.ctrlKey)) {
          event.preventDefault();
          setOpen((open) => !open);
        }
      };
      document.addEventListener('keydown', keyDownListener, false);
      return () => document.removeEventListener('keydown', keyDownListener);
    }
  }, [isMac]);

  useEffect(onMenuOpen, [open]);
  useEffect(onQueryChange, [query]);

  const expoDocsGroupedItems = groupBy(
    expoDocsItems.map((expoDocsItem: AlgoliaItemType) => ({
      ...expoDocsItem,
      baseUrl: expoDocsItem.url.replace(/#.+/, ''),
    })),
    'baseUrl'
  );

  const data = [
    query.length > 0 && (
      <Command.Group heading="Ask AI" key="expo-ai-prompt">
        <CommandItemBaseWithCopy
          value="expo-ai-prompt"
          onSelect={() => {
            submitQuery(query);
            setPromptMode(true);
          }}>
          <div className="inline-flex gap-3 items-center">
            <Stars02Icon className="text-icon-secondary" />
            <p className="text-xs font-medium">Ask Expo's AI assistant</p>
          </div>
        </CommandItemBaseWithCopy>
      </Command.Group>
    ),
    expoDocsItems.length > 0 && (
      <Command.Group heading="Expo documentation" key="expo-docs-group">
        {Object.values(expoDocsGroupedItems).map((values) =>
          values
            .sort((a, b) => a.url.localeCompare(a.baseUrl) - b.url.localeCompare(b.baseUrl))
            .slice(0, 6)
            .map((item, index) => (
              <ExpoDocsItem
                isNested={index !== 0}
                item={item}
                onSelect={dismiss}
                key={`hit-expo-docs-${item.objectID}`}
                transformUrl={docsTransformUrl}
              />
            ))
        )}
      </Command.Group>
    ),
    expoBlogItems.length > 0 && (
      <Command.Group heading="Expo blog" key="expo-blog-group">
        {expoBlogItems.map((item) => (
          <ExpoBlogItem item={item} onSelect={dismiss} key={`hit-expo-blog-${item.slug.current}`} query={query} />
        ))}
      </Command.Group>
    ),
    rnDocsItems.length > 0 && (
      <Command.Group heading="React Native documentation" key="rn-docs-group">
        {rnDocsItems.map((item) => (
          <RNDocsItem item={item} onSelect={dismiss} key={`hit-rn-docs-${item.objectID}`} />
        ))}
      </Command.Group>
    ),
    directoryItems.length > 0 && (
      <Command.Group heading="React Native directory" key="rn-directory-group">
        {directoryItems.map((item) => (
          <RNDirectoryItem item={item} onSelect={dismiss} key={`hit-rn-dir-${item.npmPkg}`} query={query} />
        ))}
      </Command.Group>
    ),
  ];

  customSections?.forEach(
    ({ items, heading, sectionIndex }) =>
      items.length > 0 &&
      data.splice(
        sectionIndex,
        0,
        <Command.Group heading={heading} key={`${sectionIndex}-${heading}`}>
          {items}
        </Command.Group>
      )
  );

  return (
    <KapaProvider userTrackingMode="none" integrationId="bf5bd579-bb83-4591-8cc9-d87b6cdcb712" callbacks={{}}>
      <Command.Dialog open={open} onOpenChange={setOpen} label="Search Menu" shouldFilter={false}>
        <SearchSmIcon className="text-icon-secondary absolute top-[29px] left-[29px] transition-opacity duration-200" />
        <div className="absolute top-[25px] right-[25px] cursor-pointer p-1 rounded-sm hocus:bg-element">
          <XIcon className="text-icon-secondary" onClick={() => setOpen(false)} />
        </div>
        <Command.Input value={query} onValueChange={setQuery} placeholder="Search or ask AI…" autoFocus />
        <BarLoader isLoading={loading} />
        {isPromptMode ? (
          <AIPromptResult
            conversation={conversation}
            isGeneratingAnswer={isGeneratingAnswer}
            isPreparingAnswer={isPreparingAnswer}
            addFeedback={addFeedback}
          />
        ) : (
          <Command.List>
            {initialized && data}
            {data.filter(Boolean).length === 0 && (
              <Command.Empty key="no-results-group">
                <p className="text-secondary text-xs">No results found.</p>
              </Command.Empty>
            )}
          </Command.List>
        )}
        <CommandFooter isPromptMode={isPromptMode} />
      </Command.Dialog>
    </KapaProvider>
  );
};
