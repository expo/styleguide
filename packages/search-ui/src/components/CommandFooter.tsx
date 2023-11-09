import React from 'react';

import { AlgoliaLogo } from '../Items/icons';

export const CommandFooter = () => (
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
    <p className="text-3xs text-tertiary inline-flex gap-2 items-center ml-auto">
      <span>Search by</span>
      <AlgoliaLogo />
    </p>
  </div>
);
