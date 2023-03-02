import { useState } from 'react';

type Text = string | null;
type CopyFn = (text: string) => Promise<boolean>;

export default function useCopy(): [Text, CopyFn] {
  const [copiedText, setCopiedText] = useState<Text>(null);

  const copy: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard is not supported!');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn('Cannot write to clipboard!', error);
    }

    setCopiedText(null);
    return false;
  };

  return [copiedText, copy];
}
