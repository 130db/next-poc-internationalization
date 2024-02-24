/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xxs: { max: "320px" },
      xs: { max: "480px" },
      ...defaultTheme.screens,
    },
    extend: {
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
        "10xl": "104rem",
        "11xl": "112rem",
        "12xl": "120rem",
      },
      gap: {
        "c-50":
          "clamp(1.25rem, 3.84615385vw + 0.04807692rem, 3.125rem)" /* 20px - 50px */,
      },
      padding: {
        "c-50":
          "clamp(1.25rem, 3.84615385vw + 0.04807692rem, 3.125rem)" /* 20px - 50px */,
      },
    },
  },
  plugins: [],
};
