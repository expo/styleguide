import { mergeClasses } from '@expo/styleguide';
import { MessageQuestionCircleIcon } from '@expo/styleguide-icons/outline/MessageQuestionCircleIcon';
import { SearchSmIcon } from '@expo/styleguide-icons/outline/SearchSmIcon';
import { Stars02Icon } from '@expo/styleguide-icons/outline/Stars02Icon';
import { XIcon } from '@expo/styleguide-icons/outline/XIcon';
import { useChat } from '@kapaai/react-sdk';
import { Command } from 'cmdk';
import groupBy from 'lodash.groupby';
import React, { useEffect, useRef, useState } from 'react';

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
import { ModeTab } from './ModeTab';

export const CommandMenuContent = ({
  config: { docsVersion, docsTransformUrl, docsSectionContext, docsGroupByMainSection = false },
  open,
  setOpen,
  customSections = [],
}: CommandMenuProps) => {
  const [initialized, setInitialized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [isMac, setIsMac] = useState<boolean | null>(null);
  const [isPromptMode, setPromptMode] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

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

  const getExpoDocsItems = async () =>
    getItemsAsync(query, (searchQuery) => getExpoDocsResults(searchQuery, docsVersion, { sectionContext: docsSectionContext }), setExpoDocsItems);
  const getExpoBlogItems = async () => getSanityItemsAsync(query, getExpoBlogResults, setExpoBlogItems);
  const getRNDocsItems = async () => getItemsAsync(query, getRNDocsResults, setRnDocsItems);
  const getDirectoryItems = async () => getItemsAsync(query, getDirectoryResults, setDirectoryItems);

  const dismiss = () => setOpen(false);
  const latestConversation = conversation.getLatest();

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
      if (!isPromptMode) {
        setLoading(true);
        const inputTimeout = setTimeout(() => {
          fetchData(() => setLoading(false));
        }, 500);
        return () => clearTimeout(inputTimeout);
      }
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

  const inDialogKeyDownListener = (event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setPromptMode((isActive) => !isActive);
      inputRef?.current?.focus();
    }

    if (isPromptMode) {
      if (event.key === 'Enter') {
        event.preventDefault();
        if (query.length > 0) {
          if (isPreparingAnswer || isGeneratingAnswer) {
            stopGeneration();
            return;
          }
          if (latestConversation?.question === query && !latestConversation?.isGenerationAborted) {
            return;
          }
          resetConversation();
          setLoading(true);
          submitQuery(query);
          setQuery('');
        }
      }
    }
  };

  useEffect(() => {
    setIsMac(typeof navigator !== 'undefined' && isAppleDevice());
  }, []);

  useEffect(() => {
    if (!isPreparingAnswer && !isGeneratingAnswer) {
      setLoading(false);
    }
  }, [isPreparingAnswer, isGeneratingAnswer]);

  useEffect(() => {
    if (!isPromptMode) {
      onQueryChange();
    }
  }, [isPromptMode]);

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

  useEffect(() => {
    onMenuOpen();

    if (open) {
      document.addEventListener('keydown', inDialogKeyDownListener, false);
      return () => document.removeEventListener('keydown', inDialogKeyDownListener);
    } else {
      document.removeEventListener('keydown', inDialogKeyDownListener);
    }
  }, [open, isPromptMode, latestConversation, query]);

  useEffect(onQueryChange, [query]);

  const getContextBoost = (item: AlgoliaItemType) => {
    let boost = 0;
    const sectionContextString = (docsSectionContext?.section ?? '').toLowerCase();
    const groupContextString = (docsSectionContext?.group ?? '').toLowerCase();
    const mainSectionContextString = (docsSectionContext?.mainSection ?? '').toLowerCase();

    if (item.mainSection?.toLowerCase() === mainSectionContextString && mainSectionContextString) {
      boost += 3;
    }
    if (item.section?.toLowerCase().includes(sectionContextString) && sectionContextString) {
      boost += 2;
    }
    if (item.group?.toLowerCase().includes(groupContextString) && groupContextString) {
      boost += 1;
    }

    // Add the optionalFilters score when available
    boost += item._rankingInfo?.filters ?? 0;
    return boost;
  };

  // Prefer hits that match the current section context (custom boost) before falling back to
  // Algolia's original order.
  const sortedExpoDocsItems = [...expoDocsItems].sort((a, b) => {
    const aBoost = getContextBoost(a);
    const bBoost = getContextBoost(b);
    if (aBoost !== bBoost) {
      return bBoost - aBoost;
    }
    const aUserScore = a._rankingInfo?.userScore ?? 0;
    const bUserScore = b._rankingInfo?.userScore ?? 0;
    return bUserScore - aUserScore;
  });

  const expoDocsWithBaseUrl = sortedExpoDocsItems.map((expoDocsItem: AlgoliaItemType) => ({
    ...expoDocsItem,
    baseUrl: expoDocsItem.url.replace(/#.+/, ''),
    mainSection: expoDocsItem.mainSection || 'Expo documentation',
  }));

  const expoDocsGroupedByMainSection = docsGroupByMainSection
    ? groupBy(expoDocsWithBaseUrl, 'mainSection')
    : { 'Expo documentation': expoDocsWithBaseUrl };

  const prioritizedMainSection = docsSectionContext?.mainSection;

  const sortedMainSectionKeys = Object.keys(expoDocsGroupedByMainSection).sort((a, b) => {
    if (prioritizedMainSection) {
      if (a === prioritizedMainSection) return -1;
      if (b === prioritizedMainSection) return 1;
    }
    return a.localeCompare(b);
  });

  const baseUrlOrder = new Map<string, number>();
  expoDocsWithBaseUrl.forEach((item, index) => {
    const current = baseUrlOrder.get(item.baseUrl);
    if (current === undefined || index < current) {
      baseUrlOrder.set(item.baseUrl, index);
    }
  });

  const data = [
    query.length > 10 && expoDocsItems.length === 0 && (
      <Command.Group heading="Ask AI" key="expo-ai-prompt">
        <CommandItemBaseWithCopy
          value="expo-ai-prompt"
          onSelect={() => {
            setPromptMode(true);
          }}>
          <div className="inline-flex gap-3 items-center">
            <Stars02Icon className="text-icon-secondary" />
            <div className="flex flex-col">
              <p className="text-xs font-medium leading-snug">Ask Expo's AI assistant</p>
              <p className="text-2xs text-tertiary leading-snug">Experimental feature</p>
            </div>
          </div>
        </CommandItemBaseWithCopy>
      </Command.Group>
    ),
    ...(expoDocsItems.length > 0
      ? sortedMainSectionKeys.map((mainSection) => {
          const groupedByBaseUrl = groupBy(expoDocsGroupedByMainSection[mainSection], 'baseUrl');

          const baseUrlGroups = Object.entries(groupedByBaseUrl)
            .map(([baseUrl, values]) => {
              const filtersScore = Math.max(...values.map((item) => item._rankingInfo?.filters ?? 0), 0);
              const orderIndex = baseUrlOrder.get(baseUrl) ?? Number.MAX_SAFE_INTEGER;
              return { baseUrl, values, filtersScore, orderIndex };
            })
            .sort((a, b) => {
              if (a.filtersScore !== b.filtersScore) {
                return b.filtersScore - a.filtersScore;
              }
              return a.orderIndex - b.orderIndex;
            });

          return (
            <Command.Group
              heading={docsGroupByMainSection ? mainSection : 'Expo documentation'}
              key={`expo-docs-group-${mainSection}`}>
              {baseUrlGroups.map(({ values }) =>
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
          );
        })
      : []),
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

  const ModeIcon = isPromptMode ? MessageQuestionCircleIcon : SearchSmIcon;

  return (
    <Command.Dialog open={open} onOpenChange={setOpen} label="Search Menu" shouldFilter={false}>
      <div className={mergeClasses('relative flex px-4 gap-x-3 border-b border-secondary', 'max-md-gutters:flex-col')}>
        <div className="flex relative w-full overflow-hidden">
          <ModeIcon className="text-icon-tertiary absolute top-[29px] left-[13px] transition-opacity duration-200" />
          <div
            className={mergeClasses(
              'absolute top-[25px] right-[9px] z-[101] cursor-pointer p-1 rounded-sm',
              'hocus:bg-element',
              'active:scale-[0.975]'
            )}>
            <XIcon className="text-icon-tertiary" onClick={() => setQuery('')} />
          </div>
          <Command.Input
            value={query}
            onValueChange={setQuery}
            placeholder={isPromptMode ? 'Ask AI…' : 'Search…'}
            autoFocus
            ref={inputRef}
          />
        </div>
        <div
          className={mergeClasses(
            'tabs-container relative flex mt-4 mb-3 px-1.5 py-1.5 gap-1 items-center rounded-lg border border-palette-gray5 bg-subtle',
            'dark:bg-screen dark:border-palette-gray4',
            'max-md-gutters:mt-0',
            isPromptMode && 'tabs-container-ai'
          )}>
          <ModeTab
            label="Search"
            isActive={!isPromptMode}
            onClick={() => {
              setPromptMode(false);
              inputRef?.current?.focus();
            }}
          />
          <ModeTab
            label="Ask AI"
            isActive={isPromptMode}
            onClick={() => {
              setPromptMode(true);
              if (query.length > 0) {
                if (!conversation.getLatest()) {
                  setLoading(true);
                  submitQuery(query);
                  setQuery('');
                }
              }
              inputRef?.current?.focus();
            }}
          />
        </div>
      </div>
      <BarLoader isLoading={loading} />
      <div className="relative">
        <div
          className={mergeClasses(
            'pointer-events-none absolute left-0 -top-px z-10 h-6 w-[calc(100%-8px)]',
            'bg-gradient-to-b from-default to-transparent opacity-90'
          )}
        />
        {isPromptMode ? (
          <AIPromptResult
            conversation={conversation}
            isGeneratingAnswer={isGeneratingAnswer}
            isPreparingAnswer={isPreparingAnswer}
            addFeedback={addFeedback}
            resetConversation={resetConversation}
            resetInput={() => setQuery('')}
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
        <div
          className={mergeClasses(
            'pointer-events-none absolute left-0 -bottom-px z-10 h-6 w-[calc(100%-8px)]',
            'bg-gradient-to-t from-default to-transparent opacity-90'
          )}
        />
      </div>
      <CommandFooter isPromptMode={isPromptMode} />
    </Command.Dialog>
  );
};
