import { Button } from '@expo/styleguide';
import { ClipboardIcon } from '@expo/styleguide-icons/outline/ClipboardIcon';
import React, { isValidElement, PropsWithChildren, useEffect, useState } from 'react';

type Props = PropsWithChildren<{
  isLoading: boolean;
}>;

export function PromptResultCodeBlock({ children, isLoading }: Props) {
  const [isCopyable, setCopyable] = useState(false);
  const [copyDone, setCopyDone] = useState(false);

  useEffect(() => {
    if (isValidElement<PropsWithChildren>(children)) {
      if (typeof children.props.children === 'string') {
        return setCopyable(true);
      }
    }
  }, [isLoading]);

  return (
    <pre className="relative shadow-xs">
      {children}
      <Button
        className="absolute right-1.5 top-1.5"
        leftSlot={<ClipboardIcon className="text-icon-secondary" />}
        size="xs"
        theme="quaternary"
        disabled={copyDone || !isCopyable}
        onClick={() => {
          if (isValidElement<PropsWithChildren>(children)) {
            if (typeof children.props.children === 'string') {
              navigator.clipboard?.writeText(children?.props?.children);
              setCopyDone(true);
              setTimeout(() => setCopyDone(false), 1500);
            }
          }
        }}
      />
    </pre>
  );
}
