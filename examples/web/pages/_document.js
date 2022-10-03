import { BlockingSetInitialColorMode } from "@expo/styleguide";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body>
        <BlockingSetInitialColorMode />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
