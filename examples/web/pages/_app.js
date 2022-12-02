import { ThemeProvider } from "@expo/styleguide";
import "@expo/styleguide/dist/expo-theme.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <ThemeProvider><Component {...pageProps} /></ThemeProvider>;
}

export default MyApp;
