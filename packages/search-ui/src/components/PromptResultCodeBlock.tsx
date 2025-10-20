import { Button, mergeClasses } from '@expo/styleguide';
import { CheckIcon } from '@expo/styleguide-icons/outline/CheckIcon';
import { ClipboardIcon } from '@expo/styleguide-icons/outline/ClipboardIcon';
import type { PropsWithChildren } from 'react';
import React, { isValidElement, useEffect, useMemo, useState } from 'react';

import { getCodeBlockDataFromChildren, getCodeData, whenPrismReady } from '../utils/promptCodeUtils';

type PromptResultCodeBlockProps = PropsWithChildren<{
  className?: string;
}>;

export function PromptResultCodeBlock({ children, className }: PromptResultCodeBlockProps) {
  const { value, language } = useMemo(() => getCodeBlockDataFromChildren(children, className), [children, className]);

  const [prismLoaded, setPrismLoaded] = useState(false);
  useEffect(() => {
    let mounted = true;
    whenPrismReady().then(() => {
      if (mounted) setPrismLoaded(true);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const codeClassName = useMemo(() => {
    if (typeof className === 'string' && className.length > 0) {
      return className;
    }

    if (isValidElement<{ className?: string }>(children) && typeof children.props.className === 'string') {
      return children.props.className;
    }

    return undefined;
  }, [children, className]);

  const highlightClass = useMemo(
    () => codeClassName ?? (language ? `language-${language}` : undefined),
    [codeClassName, language]
  );

  const highlightedHtml = useMemo(
    () => (value ? getCodeData(value, highlightClass) : ''),
    [value, highlightClass, prismLoaded]
  );

  const codeToCopy = useMemo(() => value ?? '', [value]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return undefined;
    }
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const handleCopy = () => {
    if (!codeToCopy) {
      return;
    }
    navigator.clipboard?.writeText(codeToCopy).catch(() => {});
    setCopied(true);
  };

  if (!value) {
    return (
      <pre
        className={mergeClasses(
          'relative my-3 overflow-x-auto rounded-md border border-default bg-subtle px-4 py-3 text-2xs text-default shadow-xs',
          'font-mono leading-[1.6]'
        )}>
        {children}
      </pre>
    );
  }

  return (
    <div className="relative my-3">
      <pre
        className={mergeClasses(
          'relative overflow-x-auto rounded-md border border-default bg-subtle px-4 py-3 text-2xs text-default shadow-xs',
          'font-mono leading-[1.6]',
          'dark:bg-element'
        )}>
        <code
          className={mergeClasses('block min-w-fit whitespace-pre', codeClassName)}
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
        />
      </pre>
      <Button
        type="button"
        theme="quaternary"
        size="xs"
        className="absolute right-3 top-3 inline-flex size-7 items-center justify-center rounded-full !border !border-default !bg-default !p-0 shadow-sm"
        onClick={handleCopy}
        aria-label="Copy code block">
        {copied ? (
          <CheckIcon className="icon-xs text-success" aria-hidden />
        ) : (
          <ClipboardIcon className="icon-xs text-icon-secondary" aria-hidden />
        )}
      </Button>
    </div>
  );
}
