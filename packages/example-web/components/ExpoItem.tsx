import { CommandItemBase, addHighlight } from '@expo/search-ui';
import { BuildIcon } from '@expo/styleguide-icons';
import React, { type ComponentType } from 'react';

type Props = {
  item: ExpoItemType;
  query: string;
  onSelect?: () => void;
};

export type ExpoItemType = {
  label: string;
  url: string;
  Icon?: ComponentType<any>;
};

export const ExpoItem = ({ item, onSelect, query }: Props) => {
  const Icon = item.Icon ?? BuildIcon;
  return (
    <CommandItemBase value={`expo-dashboard-${item.url}`} url={item.url} onSelect={onSelect}>
      <div className="inline-flex gap-3 items-center">
        <Icon className="text-icon-secondary" />
        <p className="text-xs font-medium" dangerouslySetInnerHTML={{ __html: addHighlight(item.label, query) }} />
      </div>
    </CommandItemBase>
  );
};
