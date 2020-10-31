"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.colors = void 0;
var baseColors = {
    primary: {
        100: "#EDE9FF",
        200: "#D2CAFD",
        300: "#A89AF9",
        400: "#7F6DF3",
        500: "#4630EB",
        600: "#3423CA",
        700: "#2518A9",
        800: "#190F88",
        900: "#100970",
        1000: "#161856",
    },
    green: {
        100: "#E7FCD6",
        200: "#CBFAAE",
        300: "#A4F183",
        400: "#7FE461",
        500: "#4AD332",
        600: "#2EB524",
        700: "#19971A",
        800: "#0F7A18",
        900: "#096518",
    },
    blue: {
        100: "#CBF1FE",
        200: "#98DFFE",
        300: "#65C6FE",
        400: "#3FAEFD",
        500: "#0086FC",
        600: "#0067D8",
        700: "#004DB5",
        800: "#003692",
        900: "#002678",
    },
    orange: {
        100: "#FFE9C8",
        200: "#FFD093",
        300: "#FFB764",
        400: "#FF9F3C",
        500: "#FF881D",
        600: "#FB7106",
        700: "#DC5A03",
        800: "#BA4604",
        900: "#963606",
    },
    yellow: {
        100: "#FFF6CC",
        200: "#FFEA99",
        300: "#FFDC66",
        400: "#FFCD3F",
        500: "#FFB600",
        600: "#DB9600",
        700: "#B77800",
        800: "#935C00",
        900: "#7A4800",
    },
    pink: {
        100: "#ffd9fc",
        200: "#ffbffa",
        300: "#ffa6f8",
        400: "#f288e9",
        500: "#d957d9",
        600: "#b035c9",
        700: "#9129a6",
        800: "#702080",
        900: "#43134d",
    },
    red: {
        100: "#FFE5D4",
        200: "#FFC4AA",
        300: "#FF9D7F",
        400: "#FF7760",
        500: "#FF392B",
        600: "#DB1F22",
        700: "#B71525",
        800: "#930D26",
        900: "#7A0826",
    },
    gray: {
        100: "#F5F5F7",
        200: "#EBEBED",
        250: "#DDDDE1",
        300: "#CFCFD5",
        400: "#B0B0BA",
        500: "#8F8F9D",
        600: "#5C5C71",
        700: "#3B3B54",
        800: "#21213D",
        900: "#060625",
    },
    black: "#000020",
    white: "#ffffff",
    beige: "#F7F6F3",
    navy: "#1A1A35",
    lila: "#A3A1F7",
};
exports.colors = __assign(__assign({}, baseColors), { semantic: {
        border: baseColors.gray[250],
        background: "#FDFDFD",
        success: baseColors.green[700],
        error: baseColors.red[700],
        warning: baseColors.yellow[600],
    } });
