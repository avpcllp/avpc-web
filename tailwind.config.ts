import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef5f6',
          100: '#d7e7ea',
          300: '#89b4bc',
          500: '#3c7e89',
          700: '#1e4f59',
          900: '#0d2a31'
        },
        accent: '#b1873f'
      }
    }
  },
  plugins: []
};

export default config;
