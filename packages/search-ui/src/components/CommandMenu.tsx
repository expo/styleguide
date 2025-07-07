import { KapaProvider } from '@kapaai/react-sdk';
import React from 'react';

import type { CommandMenuProps } from '../types';
import { CommandMenuContent } from './CommandMenuContent';

export const CommandMenu = (props: CommandMenuProps) => {
  return (
    <KapaProvider userTrackingMode="none" integrationId="bf5bd579-bb83-4591-8cc9-d87b6cdcb712" callbacks={{}}>
      <CommandMenuContent {...props} />
    </KapaProvider>
  );
};
