import { ThemeProvider } from "@expo/styleguide";
import "@expo/styleguide/dist/expo-theme.css";
import "../styles/globals.css";
import Navigation from "../components/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div className="flex gap-12">
        <Navigation />
        <div>
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
