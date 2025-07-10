import { Button, Link, mergeClasses } from '@expo/styleguide';
import { ClipboardIcon } from '@expo/styleguide-icons/outline/ClipboardIcon';
import { ThumbsDownIcon } from '@expo/styleguide-icons/outline/ThumbsDownIcon';
import { ThumbsUpIcon } from '@expo/styleguide-icons/outline/ThumbsUpIcon';
import { ThumbsDownSolidIcon } from '@expo/styleguide-icons/solid/ThumbsDownSolidIcon';
import { ThumbsUpSolidIcon } from '@expo/styleguide-icons/solid/ThumbsUpSolidIcon';
import { type UseChat } from '@kapaai/react-sdk';
import Markdown from 'markdown-to-jsx';
import React, { useState } from 'react';

import { BarLoader } from './BarLoader';
import { PromptResultCodeBlock } from './PromptResultCodeBlock';

type Props = Partial<UseChat>;

export function AIPromptResult({ conversation, isGeneratingAnswer, isPreparingAnswer, addFeedback }: Props) {
  const [copyDone, setCopyDone] = useState(false);
  const [hasVoted, setVoted] = useState<boolean | undefined>(undefined);

  const isLoading = isPreparingAnswer || isGeneratingAnswer;
  const lastConversation = conversation?.getLatest();

  return (
    <>
      <BarLoader isLoading={isLoading} />
      <div className="result-container flex flex-col gap-4 !pt-3 w-full">
        {isPreparingAnswer && (
          <div className="flex text-xs size-full items-center justify-center text-quaternary">Preparing answer...</div>
        )}
        <Markdown
          children={lastConversation?.answer ?? ''}
          options={{
            overrides: {
              a: {
                component: Link,
              },
              pre: {
                component: PromptResultCodeBlock,
                props: {
                  isLoading,
                },
              },
            },
          }}
          className="prompt-result text-xs"
        />
        {!isLoading && lastConversation?.id && (
          <>
            <div className={mergeClasses('inline-flex items-center w-full gap-2', 'max-md-gutters:flex-col')}>
              <Button
                skipCapitalization
                theme="secondary"
                size="xs"
                leftSlot={<ClipboardIcon />}
                disabled={copyDone}
                onClick={() => {
                  if (lastConversation?.answer) {
                    navigator.clipboard?.writeText(lastConversation.answer);
                    setCopyDone(true);
                    setTimeout(() => setCopyDone(false), 1500);
                  }
                }}>
                Copy answer
              </Button>
              <p className={mergeClasses('text-tertiary text-2xs mx-auto', 'max-md-gutters:mt-0.5')}>
                Expo AI assistant is an experimental feature.
              </p>
              <div
                className={mergeClasses(
                  'contents items-center w-full gap-x-2 gap-y-3',
                  'max-md-gutters:justify-center max-md-gutters:inline-flex'
                )}>
                <p className="text-tertiary text-2xs">Rate answer:</p>
                <Button
                  theme="secondary"
                  size="xs"
                  className="shrink-0"
                  disabled={hasVoted}
                  leftSlot={
                    hasVoted === true ? (
                      <ThumbsUpSolidIcon className="text-icon-success" />
                    ) : (
                      <ThumbsUpIcon className="text-icon-success" />
                    )
                  }
                  onClick={() => {
                    addFeedback?.(lastConversation.id, 'upvote');
                    setVoted(true);
                  }}
                />
                <Button
                  theme="secondary"
                  size="xs"
                  className="shrink-0"
                  disabled={hasVoted}
                  leftSlot={
                    hasVoted === false ? (
                      <ThumbsDownSolidIcon className="text-icon-danger" />
                    ) : (
                      <ThumbsDownIcon className="text-icon-danger" />
                    )
                  }
                  onClick={() => {
                    addFeedback?.(lastConversation.id, 'downvote');
                    setVoted(false);
                  }}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
