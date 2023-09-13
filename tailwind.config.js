/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        "true-blue": "#3066BE",
        "giants-orange": "#F95A2A",
        "kelly-green": "#29BF12",
        "ash-green": "#ACC3A6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
