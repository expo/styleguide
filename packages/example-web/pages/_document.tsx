import { BlockingSetInitialColorMode } from '@expo/styleguide';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="a-test-class">
      <Head />
      <body className="bg-screen text-default min-h-dvh">
        <BlockingSetInitialColorMode />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
