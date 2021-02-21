"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockingSetInitialColorMode = exports.getInitialColorMode = void 0;
var react_1 = __importDefault(require("react"));
function getInitialColorMode() {
    var preference = window.localStorage.getItem('data-expo-theme');
    var hasPreference = typeof preference === 'string';
    /**
     * If the user has explicitly chosen light or dark,
     * use it. Otherwise, this value will be null.
     */
    if (hasPreference) {
        return preference;
    }
    // If there is no saved preference, use a media query
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    var systemPreference = typeof mql.matches === 'boolean';
    if (systemPreference) {
        return mql.matches ? 'dark' : 'light';
    }
    // default to 'light'.
    return 'light';
}
exports.getInitialColorMode = getInitialColorMode;
function setInitialColorMode() {
    var colorMode = getInitialColorMode();
    // add HTML attribute if dark mode
    if (colorMode === 'dark') {
        document.documentElement.setAttribute('data-expo-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-expo-theme', 'light');
    }
}
// our function needs to be a string so that we can call it
var blockingSetInitialColorMode = "(function() {\n        " + getInitialColorMode.toString() + "\n        " + setInitialColorMode.toString() + "\n        setInitialColorMode();\n})()\n";
function BlockingSetInitialColorMode() {
    return (react_1.default.createElement("script", { dangerouslySetInnerHTML: {
            __html: blockingSetInitialColorMode,
        } }));
}
exports.BlockingSetInitialColorMode = BlockingSetInitialColorMode;
