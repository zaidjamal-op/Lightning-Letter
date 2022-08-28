/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fastletterbg: "#000000",
        fastletter_primary: "#3E432E",
        fastletter_secondary: "#616F39",
        fastletter_mix: "#A7D129",
      },
    },
  },
  plugins: [],
};
