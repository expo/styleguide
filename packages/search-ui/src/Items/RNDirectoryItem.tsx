import { GithubIcon } from '@expo/styleguide-icons/dist/custom/GithubIcon';
import React from 'react';

import { ExternalLinkIcon } from './icons';
import { CommandItemBaseWithCopy } from '../components/CommandItemBaseWithCopy';
import type { RNDirectoryItemType } from '../types';
import { addHighlight } from '../utils';

type Props = {
  item: RNDirectoryItemType;
  query: string;
  onSelect?: () => void;
};

const numberFormat = new Intl.NumberFormat();

export const RNDirectoryItem = ({ item, onSelect, query }: Props) => {
  return (
    <CommandItemBaseWithCopy value={`rnd-${item.npmPkg}`} url={item.githubUrl} isExternalLink onSelect={onSelect}>
      <div className="inline-flex gap-3 items-center">
        <GithubIcon className="text-icon-secondary" />
        <div>
          <p className="text-xs font-medium" dangerouslySetInnerHTML={{ __html: addHighlight(item.npmPkg, query) }} />
          <p className="text-3xs text-quaternary">
            {numberFormat.format(item.github.stats.stars)} stars · {numberFormat.format(item.npm.downloads)} downloads
          </p>
        </div>
        <ExternalLinkIcon />
      </div>
    </CommandItemBaseWithCopy>
  );
};
