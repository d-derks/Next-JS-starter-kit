// tailwind.config.js
module.exports = {
  important: true,
  prefix: "u_",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {},
    spacing: {
      0: "0",
      1: "1rem",
      2: "2rem",
      3: "3rem",
      4: "4rem",
      5: "5rem",
      6: "6rem",
      7: "7rem",
      8: "8rem",
      9: "9rem",
      10: "10rem",
      11: "11rem",
      12: "12rem",
      13: "13rem",
      14: "14rem",
      15: "15rem",
    },
    screens: {
      xsmall: { max: "349px" },
      small: { min: "350px", max: "639px" },
      medium: { min: "640px", max: "1023px" },
      large: { min: "1024px", max: "1199px" },
      xlarge: { min: "1200px", max: "1439px" },
      "small-up": { min: "350px" },
      "medium-up": { min: "640px" },
      "large-up": { min: "1024px" },
      "xlarge-up": { min: "1200px" },
      "xxlarge-up": { min: "1440px" },
      "small-down": { max: "639px" },
      "medium-down": { max: "1023px" },
      "large-down": { max: "1199px" },
      "xlarge-down": { max: "1439px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: [
    "preflight",
    "display",
    "position",
    "margin",
    "padding",
    "visibility",
    "width",
    "height",
    "overflow",
  ],
};
