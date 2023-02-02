import { BlockingSetInitialColorMode } from "@expo/styleguide";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-screen text-default p-8">
        <Main />
        <BlockingSetInitialColorMode />
        <NextScript />
      </body>
    </Html>
  );
}
