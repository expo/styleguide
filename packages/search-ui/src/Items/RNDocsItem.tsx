import React from 'react';

import { FootnoteSection } from './FootnoteSection';
import { ExternalLinkIcon, ReactIcon } from './icons';
import { CommandItemBase } from '../components/CommandItemBase';
import type { AlgoliaItemType } from '../types';
import { getContentHighlightHTML, getHighlightHTML } from '../utils';

type Props = {
  item: AlgoliaItemType;
  onSelect?: () => void;
};

export const RNDocsItem = ({ item, onSelect }: Props) => {
  const { lvl0, lvl1, lvl2, lvl3, lvl4 } = item.hierarchy;
  return (
    <CommandItemBase value={`rn-${item.objectID}`} url={item.url} isExternalLink onSelect={onSelect}>
      <div className="inline-flex gap-3 items-center">
        <ReactIcon className="shrink-0" />
        <div>
          {lvl4 && (
            <>
              <p className="text-xs font-medium" {...getHighlightHTML(item, 'lvl4')} />
              <p className="text-3xs text-quaternary">
                <span {...getHighlightHTML(item, 'lvl0')} />
                <FootnoteSection item={item} levelKey="lvl1" />
                <FootnoteSection item={item} levelKey="lvl2" />
                <FootnoteSection item={item} levelKey="lvl3" />
              </p>
            </>
          )}
          {!lvl4 && lvl3 && (
            <>
              <p className="text-xs font-medium" {...getHighlightHTML(item, 'lvl3')} />
              <p className="text-3xs text-quaternary">
                <span {...getHighlightHTML(item, 'lvl0')} />
                <FootnoteSection item={item} levelKey="lvl1" />
                <FootnoteSection item={item} levelKey="lvl2" />
              </p>
            </>
          )}
          {!lvl3 && lvl2 && (
            <>
              <p className="text-xs font-medium" {...getHighlightHTML(item, 'lvl2')} />
              <p className="text-3xs text-quaternary">
                <span {...getHighlightHTML(item, 'lvl0')} />
                <FootnoteSection item={item} levelKey="lvl1" />
              </p>
            </>
          )}
          {!lvl3 && !lvl2 && lvl1 && (
            <>
              <p className="text-xs font-medium" {...getHighlightHTML(item, 'lvl1')} />
              <p className="text-3xs text-quaternary" {...getHighlightHTML(item, 'lvl0')} />
            </>
          )}
          {!lvl3 && !lvl2 && !lvl1 && lvl0 && <p className="text-xs font-medium" {...getHighlightHTML(item, 'lvl0')} />}
          <p className="text-2xs text-secondary" {...getContentHighlightHTML(item, true)} />
        </div>
        <ExternalLinkIcon />
      </div>
    </CommandItemBase>
  );
};
