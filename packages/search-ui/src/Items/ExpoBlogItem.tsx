import React from 'react';

import { ExternalLinkIcon } from './icons';
import { CommandItemBaseWithCopy } from '../components/CommandItemBaseWithCopy';
import { addHighlight, getSanityAsset } from '../utils';
import { ExpoBlogItemType } from '../types';

type Props = {
  item: ExpoBlogItemType;
  query: string;
  onSelect?: () => void;
};

export const ExpoBlogItem = ({ item, onSelect, query }: Props) => {
  return (
    <CommandItemBaseWithCopy
      value={`expo-blog-${item.slug.current}`}
      url={`https://expo.dev/blog/${item.slug.current}`}
      isExternalLink
      onSelect={onSelect}
    >
      <div className="inline-flex gap-3 items-center">
        <img
          src={getSanityAsset(item.mainImage.image.asset._ref)}
          alt={item.mainImage.altText}
          className="size-11 object-cover rounded-md my-0.5"
        />
        <div>
          <p className="text-xs font-medium" dangerouslySetInnerHTML={{ __html: addHighlight(item.title, query) }} />
          <p className="text-3xs text-quaternary" dangerouslySetInnerHTML={{ __html: addHighlight(item.metadataDescription, query) }} />
        </div>
        <ExternalLinkIcon />
      </div>
    </CommandItemBaseWithCopy>
  );
};
