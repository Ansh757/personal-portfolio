/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0c0c0c",
        gold: {
          DEFAULT: "#d4af37",
          100: "#f5e4b7",
          200: "#e6c65c",
          300: "#d4af37",
        },
        goldLight: "#f5e49b",
        goldDark: "#a97c00",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimGold: "rgba(212, 175, 55, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        gold: "0px 20px 100px -10px rgba(212, 175, 55, 0.15)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
