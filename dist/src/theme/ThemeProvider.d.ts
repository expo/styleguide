import React from 'react';
export declare enum Themes {
    AUTO = "auto",
    DARK = "dark",
    LIGHT = "light"
}
export declare function ThemeProvider({ children }: {
    children: React.ReactNode;
}): JSX.Element;
export declare function useTheme(): {
    setDarkMode: () => void;
    setLightMode: () => void;
    setAutoMode: () => void;
    themeName: Themes;
};
