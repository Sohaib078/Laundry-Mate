/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#133D79",
        primary: "#13C1EA",
        "blue-secondary": "#CDF5F5",
        "blue-primary": "#72B4B6",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideIn: "slideIn 0.3s forwards",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
