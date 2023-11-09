import { mergeClasses } from '@expo/styleguide';
import { Command } from 'cmdk';
import React, { PropsWithChildren, useState } from 'react';

import { openLink } from '../utils';

type Props = PropsWithChildren<{
  url: string;
  onSelect?: () => void;
  isExternalLink?: boolean;
  isNested?: boolean;
  className?: string;
  value?: string;
}>;

/**
 * Wrapper for Command.Item that adds copy link on right/ middle click + visual copy indicator.
 */
export const CommandItemBase = ({ children, url, isExternalLink, isNested, onSelect, className, value }: Props) => {
  const [copyDone, setCopyDone] = useState(false);

  const copyUrl = () => {
    navigator.clipboard?.writeText(url);
    setCopyDone(true);
    setTimeout(() => setCopyDone(false), 1500);
  };

  return (
    <Command.Item
      className={mergeClasses('relative', className)}
      value={value}
      data-nested={isNested ? true : undefined}
      onMouseUp={(event) => {
        // note(Keith): middle click (typical *nix copy shortcut), right click (works with Mac trackpads), onAuxClick is not supported in Safari
        if (event.button === 1 || event.button === 2) {
          copyUrl();
        }
      }}
      onSelect={() => {
        openLink(url, isExternalLink);
        onSelect && onSelect();
      }}
      onContextMenu={(event) => {
        event.preventDefault();
      }}>
      {children}
      {copyDone && (
        <div className="text-2xs font-medium absolute rounded-full px-2 right-2.5 top-[calc(50%-13px)] border-secondary bg-info text-info">
          Copied!
        </div>
      )}
    </Command.Item>
  );
};
