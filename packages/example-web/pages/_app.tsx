import { mergeClasses, ThemeProvider } from '@expo/styleguide';
import type { AppProps } from 'next/app';
import { Inter, Fira_Code } from 'next/font/google';
import Head from 'next/head';

import { SearchDialogProvider } from '@/common/SearchDialogContext';
import { Sidebar } from '@/components/Sidebar';
import { SearchMenu } from '@/components/search/SearchMenu';

import '@expo/styleguide/dist/expo-theme.css';
import '@expo/styleguide-search-ui/dist/expo-search-ui.css';
import 'public/global.css';

export const regularFont = Inter({
  variable: '--regular-font',
  display: 'swap',
  subsets: ['latin'],
});

export const monospaceFont = Fira_Code({
  variable: '--monospace-font',
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SearchDialogProvider>
        <style jsx global>
          {`
            html,
            body,
            kbd,
            button,
            input,
            select {
              font-family: ${regularFont.style.fontFamily}, sans-serif;
            }
            code,
            pre {
              font-family: ${monospaceFont.style.fontFamily}, monospace;
            }
          `}
        </style>
        <Head>
          <title>@expo/styleguide</title>
          <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
        </Head>
        <main
          className={mergeClasses(
            'grid grid-cols-[240px_1fr] p-8 gap-8',
            'max-md-gutters:grid-cols-[140px_1fr]',
            'max-sm-gutters:grid-cols-1 max-sm-gutters:gap-16'
          )}>
          <Sidebar />
          <div>
            <Component {...pageProps} />
          </div>
        </main>
        <SearchMenu />
      </SearchDialogProvider>
    </ThemeProvider>
  );
}
