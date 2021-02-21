## Setting up

1. Add the blocking script to \_document.tsx:

```tsx
<BlockingSetInitialColorMode />
```

2. Import expo colors in \_app.tsx:

```tsx
import '../theme/expo-colors.css';
```

3. Wrap \_app.tsx in `<ThemeProvider>`:

```tsx
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```

4. Use the colors in a component.

```tsx
import { theme } from '@expo/styleguide';

// ...

<div style={{ color: theme.text.default }}>Hello!</div>;

// or

const exampleStyle = css({ backgroundColor: theme.background.secondary });
```

5. Change the theme with a button, and see the current theme name:

```tsx
import { useTheme } from '@expo/styleguide';

// ...
const { setDarkMode, setLightMode, setAutoMode, themeName } = useTheme();
```
