import { DocsLogo, mergeClasses } from '@expo/styleguide';
import {
  PlanEnterpriseIcon,
  BookOpen02Icon,
  GraduationHat02Icon,
  Home02Icon,
  Hash02Icon,
} from '@expo/styleguide-icons';
import React from 'react';

import { FootnoteSection } from './FootnoteSection';
import { FootnoteArrowIcon } from './icons';
import { CommandItemBase } from '../components/CommandItemBase';
import type { AlgoliaItemType } from '../types';
import {
  getContentHighlightHTML,
  getHighlightHTML,
  isReferencePath,
  isEASPath,
  isHomePath,
  isLearnPath,
} from '../utils';

type Props = {
  item: AlgoliaItemType;
  onSelect?: () => void;
  isNested?: boolean;
  transformUrl?: (url: string) => string;
};

type ItemIconProps = {
  url: string;
  className?: string;
  isNested?: boolean;
};

const ItemIcon = ({ url, className, isNested }: ItemIconProps) => {
  if (isNested) {
    return <Hash02Icon className={mergeClasses('icon-sm text-icon-quaternary', className)} />;
  } else if (isReferencePath(url)) {
    return <DocsLogo className={mergeClasses('text-icon-secondary', className)} />;
  } else if (isEASPath(url)) {
    return <PlanEnterpriseIcon className={mergeClasses('text-icon-secondary', className)} />;
  } else if (isHomePath(url)) {
    return <Home02Icon className={mergeClasses('text-icon-secondary', className)} />;
  } else if (isLearnPath(url)) {
    return <GraduationHat02Icon className={mergeClasses('text-icon-secondary', className)} />;
  }
  return <BookOpen02Icon className={mergeClasses('text-icon-secondary', className)} />;
};

const getFootnotePrefix = (url: string) => {
  if (isReferencePath(url)) {
    return 'Reference';
  } else if (isEASPath(url)) {
    return 'Expo Application Services';
  } else if (isHomePath(url)) {
    return 'Home';
  } else if (isLearnPath(url)) {
    return 'Learn';
  } else {
    return 'Guides';
  }
};

const ItemFootnotePrefix = ({ url, isNested = false }: { url: string; isNested?: boolean }) => {
  return isNested ? (
    <>
      <span className="text-3xs text-quaternary">{getFootnotePrefix(url)}</span>
      <FootnoteArrowIcon />
    </>
  ) : (
    <p className="text-3xs text-quaternary">{getFootnotePrefix(url)}</p>
  );
};

export const ExpoDocsItem = ({ item, onSelect, isNested, transformUrl = (url: string) => url }: Props) => {
  const { lvl0, lvl2, lvl3, lvl4, lvl6 } = item.hierarchy;

  const titleClasses = mergeClasses(isNested ? 'text-2xs' : 'text-xs font-medium');
  const hierarchyClasses = mergeClasses('text-3xs text-quaternary', isNested && 'hidden');

  return (
    <CommandItemBase
      className={mergeClasses(isNested && 'ml-8 !min-h-[32px]')}
      value={`expodocs-${item.objectID}`}
      onSelect={onSelect}
      url={transformUrl(item.url)}
      isNested={isNested}>
      <div className={mergeClasses('inline-flex items-center gap-3 break-words')}>
        <ItemIcon url={item.url} isNested={isNested} className="shrink-0" />
        <div>
          {lvl6 && (
            <>
              <p className={titleClasses} {...getHighlightHTML(item, 'lvl6')} />
              {!isNested && (
                <p className="text-3xs text-quaternary">
                  <ItemFootnotePrefix url={item.url} isNested />
                  <span {...getHighlightHTML(item, 'lvl0')} />
                  <FootnoteSection item={item} levelKey="lvl2" />
                  <FootnoteSection item={item} levelKey="lvl3" />
                  <FootnoteSection item={item} levelKey="lvl4" />
                </p>
              )}
            </>
          )}
          {!lvl6 && lvl4 && (
            <>
              <p className={titleClasses} {...getHighlightHTML(item, 'lvl4')} />
              {!isNested && (
                <p className={hierarchyClasses}>
                  <ItemFootnotePrefix url={item.url} isNested />
                  <span {...getHighlightHTML(item, 'lvl0')} />
                  <FootnoteSection item={item} levelKey="lvl2" />
                  <FootnoteSection item={item} levelKey="lvl3" />
                </p>
              )}
            </>
          )}
          {!lvl6 && !lvl4 && lvl3 && (
            <>
              <p className={titleClasses} {...getHighlightHTML(item, 'lvl3')} />
              {!isNested && (
                <p className={hierarchyClasses}>
                  <ItemFootnotePrefix url={item.url} isNested />
                  <span {...getHighlightHTML(item, 'lvl0')} />
                  <FootnoteSection item={item} levelKey="lvl2" />
                </p>
              )}
            </>
          )}
          {!lvl6 && !lvl4 && !lvl3 && lvl2 && (
            <>
              <p className={titleClasses} {...getHighlightHTML(item, 'lvl2')} />
              {!isNested && (
                <p className={hierarchyClasses}>
                  <ItemFootnotePrefix url={item.url} isNested />
                  <span {...getHighlightHTML(item, 'lvl0')} />
                </p>
              )}
            </>
          )}
          {!lvl6 && !lvl4 && !lvl3 && !lvl2 && lvl0 && (
            <>
              <p className={titleClasses} {...getHighlightHTML(item, 'lvl0')} />
              <ItemFootnotePrefix url={item.url} />
            </>
          )}
          {(!isNested || item.content) && (
            <p
              className={mergeClasses('text-secondary', isNested ? 'text-3xs' : 'text-2xs')}
              {...getContentHighlightHTML(item)}
            />
          )}
        </div>
      </div>
    </CommandItemBase>
  );
};
