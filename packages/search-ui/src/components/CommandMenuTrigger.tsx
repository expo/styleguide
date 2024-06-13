import { Button, mergeClasses } from '@expo/styleguide';
import { SearchSmIcon } from '@expo/styleguide-icons/dist/outline/SearchSmIcon';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { isAppleDevice } from '../utils';

type Props = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  className?: string;
};

export const CommandMenuTrigger = ({ setOpen, className }: Props) => {
  const [isMac, setIsMac] = useState<boolean | null>(null);

  useEffect(() => {
    setIsMac(typeof navigator !== 'undefined' && isAppleDevice());
  }, []);

  return (
    <Button
      theme="secondary"
      leftSlot={<SearchSmIcon className="icon-md text-icon-secondary" />}
      rightSlot={
        isMac !== null ? (
          <div className="ml-auto max-md-gutters:hidden">
            <kbd className="!h-5 !leading-[19px]">{isMac ? '⌘' : 'Ctrl'}</kbd>{' '}
            <kbd className="!h-5 !leading-[19px]">K</kbd>
          </div>
        ) : undefined
      }
      className={mergeClasses(
        'cmdk-trigger bg-default pl-2.5 pr-3 border border-default shadow-xs min-h-[40px]',
        className
      )}
      onClick={() => setOpen(true)}>
      <p className="text-secondary font-normal leading-normal text-xs">Search</p>
    </Button>
  );
};
