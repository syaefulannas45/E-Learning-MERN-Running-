/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          100: "#462066",
          200: "#ffb85f",
          300: "#ff7a5a",
          400: "#00aaa0",
          500: "#8ed2c9",
          600: "#fcf4d9",
          700: "#E4FFFC",
          800: "#eef2ff",
        },
        button : {
          100 : "rgba(74, 114, 255, 0.05)"
        }
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
