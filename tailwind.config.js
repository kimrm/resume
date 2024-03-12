/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Inter", "sans-serif"],
      mono: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
