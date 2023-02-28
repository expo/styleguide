import { ThemeProvider } from '@expo/styleguide';
import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import { SidebarLink } from '@/components/SidebarLink';

import '@expo/styleguide/dist/expo-theme.css';
import '@/styles/globals.css';

export const regularFont = Inter({
  variable: '--inter-font',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Expo Styleguide</title>
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
      </Head>
      <main className={twMerge(regularFont.variable, 'flex p-8 gap-8')}>
        <div>
          <Link href="/">
            <Image
              src="/icon.png"
              width="72"
              height="72"
              alt="Styleguide logo"
              className="mb-4"
            />
          </Link>
          <SidebarLink href="/colors" text="Colors" />
          <SidebarLink href="/typography" text="Typography" />
          <SidebarLink href="/icons" text="Icons" />
          <SidebarLink href="/ui" text="UI" />
        </div>
        <div>
          <Component {...pageProps} />
        </div>
      </main>
    </ThemeProvider>
  );
}
