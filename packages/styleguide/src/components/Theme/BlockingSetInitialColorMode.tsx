import React from 'react';

export function isLocalStorageAvailable(): boolean {
  try {
    if (!window.localStorage || typeof window.localStorage === 'undefined') {
      return false;
    }
    window.localStorage.setItem('localStorage:test', 'value');
    if (window.localStorage.getItem('localStorage:test') !== 'value') {
      return false;
    }
    window.localStorage.removeItem('localStorage:test');
    return true;
  } catch {
    return false;
  }
}

export function getInitialColorMode(): string | null {
  if (isLocalStorageAvailable()) {
    const preference = window.localStorage.getItem('data-expo-theme');
    const hasPreference = typeof preference === 'string';

    if (hasPreference) {
      return preference;
    }
  }

  const mql = window.matchMedia('(prefers-color-scheme: dark)');

  const systemPreference = typeof mql.matches === 'boolean';
  if (systemPreference) {
    return mql.matches ? 'dark' : 'light';
  }

  return 'light';
}

function setInitialColorMode() {
  const colorMode = getInitialColorMode();

  // add HTML attribute if dark mode
  if (colorMode === 'dark') {
    document.documentElement.classList.add('dark-theme');
  } else {
    document.documentElement.classList.remove('dark-theme');
  }
}

// our function needs to be a string so that we can call it
const blockingSetInitialColorMode = `(function() {
  ${isLocalStorageAvailable.toString()}
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
    />
  );
}
