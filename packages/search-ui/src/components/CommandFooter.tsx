import React from 'react';

import { AlgoliaLogo, KapaLogo } from '../Items/icons';

type Props = { isPromptMode: boolean };

export function CommandFooter({ isPromptMode }: Props) {
  return (
    <div className="flex gap-4 px-4 h-11 items-center">
      <p className="text-3xs text-tertiary inline-flex gap-2 items-center max-md-gutters:hidden">
        <kbd>↵</kbd>
        <span>to select</span>
      </p>
      <p className="text-3xs text-tertiary inline-flex gap-2 items-center max-md-gutters:hidden">
        <kbd>↑</kbd>
        <kbd>↓</kbd>
        <span>to navigate</span>
      </p>
      <p className="text-3xs text-tertiary inline-flex gap-2 items-center max-md-gutters:hidden">
        <kbd>esc</kbd>
        <span>to close</span>
      </p>
      {isPromptMode ? (
        <p className="text-3xs text-tertiary inline-flex gap-1.5 items-center ml-auto">
          <span>AI assistant by</span>
          <a href="https://www.kapa.ai/" target="_blank">
            <KapaLogo className="hocus:opacity-80" />
          </a>
        </p>
      ) : (
        <p className="text-3xs text-tertiary inline-flex gap-2 items-center ml-auto">
          <span>Search by</span>
          <a
            href="https://www.algolia.com/developers/?utm_medium=referral&utm_content=powered_by&utm_source=expo.dev.com&utm_campaign=docsearch"
            target="_blank">
            <AlgoliaLogo className="hocus:opacity-80" />
          </a>
        </p>
      )}
    </div>
  );
}
