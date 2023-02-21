import type { AppProps } from 'next/app';
import { ThemeProvider } from "@expo/styleguide";
import { Inter } from "@next/font/google";
import { twMerge } from 'tailwind-merge';

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
      <main className={twMerge(regularFont.variable, "flex p-8 gap-8")}>
        <div>
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
