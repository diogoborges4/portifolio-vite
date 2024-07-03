/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        "animar-cursor": {
          "0%": {
            color: "rgb(124 58 237)",
          },
          "100%": {
            color: "rgb(0,0,0,0)",
          },
        },
      },
      animation: {
        "animar-cursor": "animar-cursor .8s infinite",
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class",
};
