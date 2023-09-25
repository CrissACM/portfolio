/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#1C1C27',
        light: '#ECF0F3',
        primary: '#9C27B0', // 240,86,199
        primaryDark: '#1976D2', // 80,230,217
        card: '#DCE9E6',
        carDark: '#171721',
        carDarkL: '#191924',
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      mg: { max: '960px' },
      // => @media (max-width: 767px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }

      xs: { max: '479px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
