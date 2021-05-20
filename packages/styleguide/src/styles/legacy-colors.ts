const gray = {
  '000': '#FDFDFE',
  100: '#F8F8FA',
  200: '#F0F1F2',
  300: '#E1E4E8',
  400: '#D1D5DA',
  500: '#B7BBBF',
  600: '#6C737C',
  700: '#596068',
  800: '#464D55',
  900: '#30363C',
  1000: '#25292E',
};

const green = {
  '000': '#f0fff4',
  100: '#dcffe4',
  200: '#bef5cb',
  300: '#85e89d',
  400: '#34d058',
  500: '#28a745',
  600: '#22863a',
  700: '#176f2c',
  800: '#165c26',
  900: '#144620',
};

const red = {
  '000': '#ffeef0',
  100: '#ffdce0',
  200: '#fdaeb7',
  300: '#f97583',
  400: '#ea4a5a',
  500: '#d73a49',
  600: '#cb2431',
  700: '#b31d28',
  800: '#9e1c23',
  900: '#86181d',
};

const yellow = {
  '000': '#fffdef',
  100: '#fffbdd',
  200: '#fff5b1',
  300: '#ffea7f',
  400: '#ffdf5d',
  500: '#ffd33d',
  600: '#f9c513',
  700: '#dbab09',
  800: '#b08800',
  900: '#735c0f',
};

const blue = {
  '000': '#f1f8ff',
  100: '#dbedff',
  200: '#c8e1ff',
  300: '#79b8ff',
  400: '#2188ff',
  500: '#0366d6',
  600: '#005cc5',
  700: '#044289',
  800: '#032f62',
  900: '#05264c',
};

const purple = {
  '000': '#f5f0ff',
  100: '#e6dcfd',
  200: '#d1bcf9',
  300: '#b392f0',
  400: '#8a63d2',
  500: '#6f42c1',
  600: '#5a32a3',
  700: '#4c2889',
  800: '#3a1d6e',
  900: '#29134e',
};

const orange = {
  '000': '#fff8f2',
  100: '#ffebda',
  200: '#ffd1ac',
  300: '#ffab70',
  400: '#fb8532',
  500: '#f66a0a',
  600: '#e36209',
  700: '#d15704',
  800: '#c24e00',
  900: '#a04100',
};

const pink = {
  '000': '#ffeef8',
  100: '#fedbf0',
  200: '#f9b3dd',
  300: '#f692ce',
  400: '#ec6cb9',
  500: '#ea4aaa',
  600: '#d03592',
  700: '#b93a86',
  800: '#99306f',
  900: '#6d224f',
};

const primary = {
  100: '#EDE9FF',
  200: '#D2CAFD',
  300: '#A89AF9',
  400: '#7F6DF3',
  500: '#4630EB',
  600: '#3423CA',
  700: '#2518A9',
  800: '#190F88',
  900: '#100970',
  1000: '#161856',
};

const baseColors = {
  blue,
  gray,
  green,
  orange,
  pink,
  primary,
  red,
  yellow,
  black: '#001020',
  white: '#ffffff',
  beige: '#F7F6F3',
  navy: '#1A1A35',
  lila: '#A3A1F7',
};

export const legacyColors = {
  ...baseColors,
  semantic: {
    border: baseColors.gray[300],
    background: baseColors.gray['000'],
    success: baseColors.green[500],
    error: baseColors.red[500],
    warning: baseColors.yellow[700],
    link: baseColors.primary[500],
    text: baseColors.black,

    dark: {
      border: baseColors.gray[800],
      background: baseColors.gray[1000],
      success: baseColors.green[300],
      error: baseColors.red[300],
      warning: baseColors.yellow[300],
      link: baseColors.primary[300],
      text: baseColors.gray[100],
    },
  },
};
