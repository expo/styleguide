import { mergeClasses } from '@expo/styleguide';
import { Command } from 'cmdk';
import React, { PropsWithChildren, useState } from 'react';

import { openLink } from '../utils';

type Props = PropsWithChildren<{
  url?: string;
  onSelect?: () => void;
  isExternalLink?: boolean;
  isNested?: boolean;
  className?: string;
  value?: string;
}>;

export const CommandItemBaseWithCopy = ({
  children,
  url,
  isExternalLink,
  isNested,
  onSelect,
  className,
  value,
}: Props) => {
  const [copyDone, setCopyDone] = useState(false);
  const [isMetaClick, setMetaClick] = useState(false);

  function copyUrl(url: string) {
    navigator.clipboard?.writeText(url);
    setCopyDone(true);
    setTimeout(() => setCopyDone(false), 1500);
  }

  return (
    <Command.Item
      className={mergeClasses('relative', className)}
      value={value}
      data-nested={isNested ? true : undefined}
      onMouseDown={(event) => {
        if (event.metaKey || event.ctrlKey) {
          setMetaClick(true);
        }
      }}
      onMouseUp={(event) => {
        // note(Keith): middle click (typical *nix copy shortcut), right click (works with Mac trackpads), onAuxClick is not supported in Safari
        if (url && (event.button === 1 || event.button === 2)) {
          copyUrl(url);
        }
      }}
      onSelect={() => {
        url && openLink(url, isMetaClick ? true : isExternalLink);
        if (isMetaClick) {
          setMetaClick(false);
        } else {
          onSelect && onSelect();
        }
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
