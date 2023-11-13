import { CommandMenu } from '@expo/styleguide-search-ui';
import { ReactNode, useState } from 'react';

import { useSearchDialogContext } from '@/common/SearchDialogContext';
import { StyleguideItem } from '@/components/search/StyleguideItem';
import { entries as quickActionEntries } from '@/data/quickActionEntries';
import { entries as styleguideEntries } from '@/data/styleguideEntries';

export function SearchMenu() {
  const { isOpen, setOpen } = useSearchDialogContext();
  const [styleguideItems, setStyleguideItems] = useState<ReactNode[]>([]);
  const [quickActionItems, setQuickActionItems] = useState<ReactNode[]>([]);

  const getStyleguideItems = async (query: string) => {
    const filteredEntries = styleguideEntries.filter((entry) =>
      entry.label.toLowerCase().includes(query.toLowerCase())
    );
    setStyleguideItems(
      filteredEntries.map((item) => (
        <StyleguideItem item={item} query={query} key={item.url} onSelect={() => setOpen(false)} />
      ))
    );
  };

  const getQuickActionItems = async (query: string) => {
    const filteredEntries = quickActionEntries.filter((entry) =>
      entry.label.toLowerCase().includes(query.toLowerCase())
    );
    setQuickActionItems(filteredEntries.map((item) => <item.Element item={item} query={query} key={item.label} />));
  };

  return (
    <CommandMenu
      config={{ docsVersion: 'latest' }}
      open={isOpen}
      setOpen={setOpen}
      customSections={[
        {
          heading: 'Quick Actions',
          items: quickActionItems,
          getItemsAsync: getQuickActionItems,
          sectionIndex: 0,
        },
        {
          heading: 'Expo Styleguide',
          items: styleguideItems,
          getItemsAsync: getStyleguideItems,
          sectionIndex: 1,
        },
      ]}
    />
  );
}
