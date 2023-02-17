import type { AppProps } from 'next/app'
import  { ThemeProvider } from "@expo/styleguide";
import "@expo/styleguide/dist/expo-theme.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider><Component {...pageProps} /></ThemeProvider>
}
