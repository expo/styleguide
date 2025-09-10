import { Button, Link, mergeClasses } from '@expo/styleguide';
import { ClipboardIcon } from '@expo/styleguide-icons/outline/ClipboardIcon';
import { RefreshCcw02Icon } from '@expo/styleguide-icons/outline/RefreshCcw02Icon';
import { ThumbsDownIcon } from '@expo/styleguide-icons/outline/ThumbsDownIcon';
import { ThumbsUpIcon } from '@expo/styleguide-icons/outline/ThumbsUpIcon';
import { ThumbsDownSolidIcon } from '@expo/styleguide-icons/solid/ThumbsDownSolidIcon';
import { ThumbsUpSolidIcon } from '@expo/styleguide-icons/solid/ThumbsUpSolidIcon';
import { type UseChat } from '@kapaai/react-sdk';
import Markdown from 'markdown-to-jsx';
import React, { useState } from 'react';

import { BarLoader } from './BarLoader';
import { DotsLoader } from './DotsLoader';
import { PromptResultCodeBlock } from './PromptResultCodeBlock';

type Props = Partial<UseChat> & {
  resetInput: () => void;
};

export function AIPromptResult({
  conversation,
  isGeneratingAnswer,
  isPreparingAnswer,
  addFeedback,
  resetConversation,
  resetInput,
}: Props) {
  const [copyDone, setCopyDone] = useState(false);
  const [hasVoted, setVoted] = useState<boolean | undefined>(undefined);

  const isLoading = isPreparingAnswer || isGeneratingAnswer;
  const lastConversation = conversation?.getLatest();

  return (
    <>
      <BarLoader isLoading={isLoading} />
      <div className="result-container flex flex-col gap-3 !pt-3 w-full">
        {lastConversation?.isGenerationAborted && (
          <div className="text-xs bg-info text-info border border-info px-3 py-2.5 rounded-md">
            The generation has been aborted. Press Enter <kbd className="mx-0.5">↵</kbd> to send a new question.
          </div>
        )}
        {!isLoading && !lastConversation?.question && (
          <div
            className={mergeClasses(
              'flex flex-wrap text-xs size-full items-center justify-center text-quaternary',
              'max-md-gutters:text-center max-md-gutters:px-5'
            )}>
            <span>
              Ask the question above and then press Enter <kbd className="mx-0.5">↵</kbd> to send it.
            </span>
          </div>
        )}
        {lastConversation?.question && (
          <div className="font-semibold mt-1 leading-relaxed">You asked: "{lastConversation?.question ?? ''}"</div>
        )}
        {isPreparingAnswer && (
          <div className="flex text-xs size-full items-center justify-center text-quaternary">
            Preparing answer
            <DotsLoader />
          </div>
        )}
        <Markdown
          children={(() => {
            if (!lastConversation?.answer) return '';
            let processedAnswer = lastConversation.answer;

            processedAnswer = processedAnswer.replace(/\[([^\]]+)\]\(([^)]+)\)/g, 'Source: [$1]($2)');
            processedAnswer = processedAnswer.replace(/\]\(([^)]+)\)\s*Source:/g, ']($1) | Source:');
            processedAnswer = processedAnswer.replace(/([^.!?])\s*Source:/g, '$1. Source:');
            processedAnswer = processedAnswer.replace(/\|\s*\./g, '|');

            return processedAnswer;
          })()}
          options={{
            overrides: {
              a: {
                component: Link,
                props: {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                },
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
            <div className={mergeClasses('inline-flex items-center w-full gap-2 mt-1', 'max-md-gutters:flex-col')}>
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
              <Button
                skipCapitalization
                theme="secondary"
                size="xs"
                leftSlot={<RefreshCcw02Icon />}
                className="mr-auto max-md-gutters:mx-auto"
                onClick={() => {
                  resetConversation?.();
                  resetInput?.();
                }}>
                Reset conversation
              </Button>
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
            <p className={mergeClasses('text-quaternary text-2xs my-1 mx-auto', 'max-md-gutters:mt-0.5')}>
              Expo AI assistant is an experimental feature.
            </p>
          </>
        )}
      </div>
    </>
  );
}
