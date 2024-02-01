import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'wenge': { DEFAULT: '#5d576b', 100: '#131115', 200: '#25232b', 300: '#383440', 400: '#4a4655', 500: '#5d576b', 600: '#7b748d', 700: '#9c97aa', 800: '#bdb9c6', 900: '#dedce3' },
        'tropical_indigo': { DEFAULT: '#8884ff', 100: '#03004e', 200: '#05009b', 300: '#0800e9', 400: '#3e37ff', 500: '#8884ff', 600: '#a09dff', 700: '#b8b6ff', 800: '#d0ceff', 900: '#e7e7ff' },
        'thistle': { DEFAULT: '#d7bce8', 100: '#2f153e', 200: '#5d2b7d', 300: '#8c40bb', 400: '#b17cd2', 500: '#d7bce8', 600: '#dec8ec', 700: '#e7d6f1', 800: '#efe4f6', 900: '#f7f1fa' },
        'thistle_light': { DEFAULT: '#e8cee4', 100: '#3c1c37', 200: '#77386e', 300: '#b057a3', 400: '#cc93c3', 500: '#e8cee4', 600: '#edd8ea', 700: '#f1e2ef', 800: '#f6ecf4', 900: '#faf5fa' },
        'pale_purple': { DEFAULT: '#fde2ff', 100: '#590060', 200: '#b300c0', 300: '#f021ff', 400: '#f781ff', 500: '#fde2ff', 600: '#fde7ff', 700: '#feedff', 800: '#fef3ff', 900: '#fff9ff' }
      }
    },
  },
  plugins: [],
} satisfies Config;

