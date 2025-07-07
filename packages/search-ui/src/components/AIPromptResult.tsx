import { Button, Link } from '@expo/styleguide';
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

type Props = Partial<UseChat> & {
  onReset: () => void;
};

export function AIPromptResult({ conversation, isGeneratingAnswer, isPreparingAnswer, addFeedback, onReset }: Props) {
  const [copyDone, setCopyDone] = useState(false);
  const [hasVoted, setVoted] = useState<boolean | undefined>(undefined);

  const isLoading = isPreparingAnswer || isGeneratingAnswer;
  const lastConversation = conversation?.getLatest();

  return (
    <>
      <BarLoader isLoading={isLoading} />
      <div className="result-container flex flex-col gap-4 px-4 py-3 w-full">
        {isPreparingAnswer && (
          <div className="blog text-xs w-full text-center text-quaternary">Preparing answer...</div>
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
            <div className="inline-flex w-full gap-2">
              <Button theme="secondary" size="xs" className="mr-auto" onClick={onReset}>
                Ask an another question
              </Button>
              <Button
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
                }}
              />
              <Button
                theme="secondary"
                size="xs"
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
          </>
        )}
      </div>
    </>
  );
}
