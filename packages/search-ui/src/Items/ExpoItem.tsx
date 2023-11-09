import { BuildIcon } from '@expo/styleguide-icons';
import React from 'react';

import { CommandItemBase } from '../components/CommandItemBase';
import type { ExpoItemType } from '../types';
import { addHighlight } from '../utils';

type Props = {
  item: ExpoItemType;
  query: string;
  onSelect?: () => void;
};

export const ExpoItem = ({ item, onSelect, query }: Props) => {
  const Icon = item.Icon ?? BuildIcon;
  return (
    <CommandItemBase value={`expo-${item.url}`} url={item.url} onSelect={onSelect}>
      <div className="inline-flex gap-3 items-center">
        <Icon className="text-icon-secondary" />
        <p className="text-xs font-medium" dangerouslySetInnerHTML={{ __html: addHighlight(item.label, query) }} />
      </div>
    </CommandItemBase>
  );
};
