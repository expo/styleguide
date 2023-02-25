import { ThemeProvider } from "@expo/styleguide";
import { Inter, Fira_Code } from "@next/font/google";
import type { AppProps } from 'next/app';
import Head from "next/head";

import { Sidebar } from "@/components/Sidebar";

import "@expo/styleguide/dist/expo-theme.css";
import "@expo/styleguide/dist/global.css";

export const regularFont = Inter({
  variable: '--inter-font',
  display: 'swap',
});

export const monospaceFont = Fira_Code({
  weight: '400',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <style jsx global>
        {`
          html, body, kbd, button, input, select {
            font-family: ${regularFont.style.fontFamily}, sans-serif;
          }
          code, pre {
            font-family: ${monospaceFont.style.fontFamily}, monospace;
          }
        `}
      </style>
      <Head>
        <title>Expo Styleguide</title>
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
      </Head>
      <main className="flex p-8 gap-8">
        <Sidebar />
        <div className="pl-[240px]">
          <Component {...pageProps} />
        </div>
      </main>
    </ThemeProvider>
  );
}
