import React from 'react';

export function getInitialColorMode(): string | null {
  const preference = window.localStorage.getItem('data-expo-theme');
  let hasPreference = typeof preference === 'string';

  /**
   * If the user has explicitly chosen light or dark,
   * use it. Otherwise, this value will be null.
   */
  if (hasPreference) {
    return preference;
  }

  // If there is no saved preference, use a media query
  const mql = window.matchMedia('(prefers-color-scheme: dark)');

  const systemPreference = typeof mql.matches === 'boolean';
  if (systemPreference) {
    return mql.matches ? 'dark' : 'light';
  }

  // default to 'light'.
  return 'light';
}

function setInitialColorMode() {
  const colorMode = getInitialColorMode();

  // add HTML attribute if dark mode
  if (colorMode === 'dark') {
    document.documentElement.setAttribute('data-expo-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-expo-theme', 'light');
  }
}

// our function needs to be a string so that we can call it
const blockingSetInitialColorMode = `(function() {
        ${getInitialColorMode.toString()}
        ${setInitialColorMode.toString()}
        setInitialColorMode();
})()
`;

export function BlockingSetInitialColorMode() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: blockingSetInitialColorMode,
      }}
    ></script>
  );
}
