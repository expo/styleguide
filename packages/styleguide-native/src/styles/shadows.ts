const shadowsBase = {
  micro: {
    elevation: 1,
    shadowColor: '#000',
    shadowRadius: 1,
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.075,
  },
  tiny: {
    elevation: 4,
    shadowColor: '#000',
    shadowRadius: 3,
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 0.15,
  },
  small: {
    elevation: 8,
    shadowColor: '#000',
    shadowRadius: 8,
    shadowOffset: { height: 6, width: 0 },
    shadowOpacity: 0.15,
  },
  medium: {
    elevation: 16,
    shadowColor: '#000',
    shadowRadius: 10,
    shadowOffset: { height: 10, width: 0 },
    shadowOpacity: 0.17,
  },
  large: {
    elevation: 28,
    shadowColor: '#000',
    shadowRadius: 25,
    shadowOffset: { height: 16, width: 0 },
    shadowOpacity: 0.2,
  },
};

export const shadows = {
  ...shadowsBase,
  input: shadowsBase.micro,
  button: shadowsBase.micro,
  popover: shadowsBase.small,
};
