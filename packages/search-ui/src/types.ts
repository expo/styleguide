import type { Dispatch, ReactNode, SetStateAction } from 'react';

export type CommandMenuProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  config: CommandMenuConfig;
  customSections?: CommandMenuSection[];
};

export type CommandMenuConfig = {
  docsVersion: string;
  docsTransformUrl?: (url: string) => string;
  disableDashboardSection?: boolean;
  docsSectionContext?: DocsSectionContext;
  docsGroupByMainSection?: boolean;
  docsContextBoost?: boolean;
};

export type CommandMenuSection = {
  heading: string;
  getItemsAsync: (query: string) => Promise<void>;
  items: ReactNode[];
  sectionIndex: number;
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
  mainSection?: string | null;
  section?: string | null;
  group?: string | null;
  url: string;
  objectID: string;
  anchor: string | null;
  content: string | null;
  hierarchy: AlgoliaItemHierarchy<string>;
  _rankingInfo?: {
    userScore?: number;
    filters?: number;
  };
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

export type DocsSectionContext = {
  mainSection?: string | null;
  section?: string | null;
  group?: string | null;
};

export type ExpoBlogItemType = {
  title: string;
  tags: string[];
  metadataDescription: string;
  slug: {
    current: string;
  };
  mainImage: {
    altText: string;
    image: {
      asset: {
        _ref: string;
      };
    };
  };
};
