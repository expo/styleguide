import type { AppProps } from 'next/app';
import { ThemeProvider } from "@expo/styleguide";
import { Inter } from "@next/font/google";
import { twMerge } from 'tailwind-merge';
import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';

import { SidebarLink } from "@/components/SidebarLink";

import "@expo/styleguide/dist/expo-theme.css";
import "@/styles/globals.css";

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
      <main className={twMerge(regularFont.variable, "flex p-8 gap-8")}>
        <div className="fixed w-[240px]">
          <Link href="/" className="inline-block mb-4">
            <Image src="/icon.png" width="72" height="72" alt="Styleguide logo" />
          </Link>
          <SidebarLink href="/colors" text="Colors" />
          <SidebarLink href="/typography" text="Typography" />
          <SidebarLink href="/icons" text="Icons" />
          <SidebarLink href="/ui" text="UI" />
        </div>
        <div className="pl-[240px]">
          <Component {...pageProps} />
        </div>
      </main>
    </ThemeProvider>
  );
}
