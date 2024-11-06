const { platformSelect } = require('nativewind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  important: 'html',
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontSize: {
        '2xs': platformSelect({
          ios: '24px',
          android: '30px',
          web: '36px',
          default: '40px',
        }),
      },
      boxShadow: {
        // '3xl': platformSelect({
        //   android: '0px 2px 10px 0px rgba(38, 38, 38, 0.9)',
        //   default: '0px 2px 10px 0px rgba(38, 38, 38, 0.1)',
        // }),
        '4xl': '0px 2px 10px 0px rgba(38, 38, 38, 0.1)',
      },
    },
  },
  plugins: [],
};
