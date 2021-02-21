"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = exports.ThemeProvider = exports.Themes = void 0;
var react_1 = __importStar(require("react"));
var BlockingSetInitialColorMode_1 = require("./BlockingSetInitialColorMode");
var Themes;
(function (Themes) {
    Themes["AUTO"] = "auto";
    Themes["DARK"] = "dark";
    Themes["LIGHT"] = "light";
})(Themes = exports.Themes || (exports.Themes = {}));
var ThemeContext = react_1.createContext({
    setDarkMode: function () { },
    setLightMode: function () { },
    setAutoMode: function () { },
    themeName: Themes.AUTO,
});
function ThemeProvider(_a) {
    var children = _a.children;
    var _b = react_1.useState(Themes.AUTO), themeName = _b[0], setThemeName = _b[1];
    react_1.useEffect(function didMount() {
        var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', onThemeChange);
        var themePreference = window.localStorage.getItem('data-expo-theme');
        if (themePreference === Themes.LIGHT || themePreference === Themes.DARK) {
            setThemeName(themePreference);
        }
        else {
            setThemeName(Themes.AUTO);
        }
        return function unMount() {
            mediaQuery.removeEventListener('change', onThemeChange);
        };
    }, []);
    function setDocumentTheme(themeName) {
        if ([Themes.LIGHT, Themes.DARK].includes(themeName)) {
            document.documentElement.setAttribute('data-expo-theme', themeName);
        }
    }
    function onThemeChange(event) {
        var themePreference = window.localStorage.getItem('data-expo-theme');
        if (!themePreference) {
            if (event.matches) {
                setDocumentTheme(Themes.DARK);
            }
            else {
                setDocumentTheme(Themes.LIGHT);
            }
        }
    }
    function setDarkMode() {
        process.browser &&
            window.localStorage.setItem('data-expo-theme', Themes.DARK);
        setDocumentTheme(Themes.DARK);
        setThemeName(Themes.DARK);
    }
    function setLightMode() {
        process.browser &&
            window.localStorage.setItem('data-expo-theme', Themes.LIGHT);
        setDocumentTheme(Themes.LIGHT);
        setThemeName(Themes.LIGHT);
    }
    function setAutoMode() {
        process.browser &&
            window.localStorage.removeItem('data-expo-theme');
        var themeName = BlockingSetInitialColorMode_1.getInitialColorMode();
        setDocumentTheme(themeName);
        setThemeName(Themes.AUTO);
    }
    return (react_1.default.createElement(ThemeContext.Provider, { value: {
            setDarkMode: setDarkMode,
            setLightMode: setLightMode,
            setAutoMode: setAutoMode,
            themeName: themeName,
        } }, children));
}
exports.ThemeProvider = ThemeProvider;
function useTheme() {
    var context = react_1.useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
exports.useTheme = useTheme;
