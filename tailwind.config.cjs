/** @type {import('tailwindcss').Config}*/
const tailwindConfig = require('@oneezy/ui/tailwind.config.cjs');

const config = {
  ...tailwindConfig,
  theme: {
    ...tailwindConfig.theme, // first spread the original theme
    extend: {
      ...tailwindConfig.theme.extend, // then spread any original extend properties
      fontFamily: {
        ...tailwindConfig.theme.fontFamily,
        'mercenary': ['Mercenary', 'sans'], // and then add or override any new ones
      },
      fontWeight: {
        'thin': 100,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'black': 900,
      }
    },
  },
};

module.exports = config;