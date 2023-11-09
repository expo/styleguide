import type { ReactNode } from 'react';

export type CommandMenuConfig = {
  docsVersion: string;
  docsTransformUrl?: (url: string) => string;
  disableDashboardSection?: boolean;
};

export type CommandMenuSection = {
  heading: string;
  getItemsAsync: (query: string) => Promise<void>;
  items: ReactNode[];
};

export type AlgoliaHighlight = {
  value: string;
};

export type AlgoliaItemHierarchy<T> = {
  lvl0?: T | null;
  lvl1?: T | null;
  lvl2?: T | null;
  lvl3?: T | null;
  lvl4?: T | null;
  lvl5?: T | null;
  lvl6?: T | null;
};

export type AlgoliaItemType = {
  url: string;
  objectID: string;
  anchor: string | null;
  content: string | null;
  hierarchy: AlgoliaItemHierarchy<string>;
  _highlightResult: {
    content: AlgoliaHighlight | null;
    hierarchy: AlgoliaItemHierarchy<AlgoliaHighlight>;
  };
};

export type RNDirectoryItemType = {
  npmPkg: string;
  githubUrl: string;
  npm: {
    downloads: number;
  };
  github: {
    stats: {
      stars: number;
    };
  };
};
