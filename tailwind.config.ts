import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
        '11': '44px',
        '12': '48px',
      },
      colors: {
        primary: '#cba64d',
        secondary: '#796e69',
        tertiary: '#8E8F88',
      },
      fontFamily: {
        trajan: ['Trajan Pro', 'sans-serif'],
        'red-hat': ['Red Hat Text', 'sans-serif'],
      },
      screens: {
        md: '981px',
      },
    },
  },
  plugins: [],
};

export default config;
