/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        "star-dust": {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e6e6e6",
          300: "#d6d6d6",
          400: "#b8b8b8",
          500: "#999999",
          600: "#8a8a8a",
          700: "#737373",
          800: "#5c5c5c",
          900: "#4b4b4b",
        },
        woodsmoke: {
          50: "#f3f3f3",
          100: "#e7e7e7",
          200: "#c4c4c4",
          300: "#a0a0a0",
          400: "#595959",
          500: "#121212",
          600: "#101010",
          700: "#0e0e0e",
          800: "#0b0b0b",
          900: "#090909",
        },
        shilo: {
          50: "#fefbfb",
          100: "#fdf7f6",
          200: "#faece9",
          300: "#f7e0dc",
          400: "#f1c9c1",
          500: "#EBB2A7",
          600: "#d4a096",
          700: "#b0867d",
          800: "#8d6b64",
          900: "#735752",
        },
        putty: {
          50: "#fefcf9",
          100: "#fdfaf3",
          200: "#faf2e0",
          300: "#f6eacd",
          400: "#f0daa8",
          500: "#E9CA83",
          600: "#d2b676",
          700: "#af9862",
          800: "#8c794f",
          900: "#726340",
        },
        "aqua-forest": {
          50: "#f8fbf9",
          100: "#f1f8f2",
          200: "#ddecdf",
          300: "#c8e1cc",
          400: "#9fcba5",
          500: "#76B47F",
          600: "#6aa272",
          700: "#59875f",
          800: "#476c4c",
          900: "#3a583e",
        },
        "brandy-rose": {
          50: "#fcf9f8",
          100: "#f8f2f1",
          200: "#eedfdc",
          300: "#e4ccc7",
          400: "#cfa59c",
          500: "#BB7F72",
          600: "#a87267",
          700: "#8c5f56",
          800: "#704c44",
          900: "#5c3e38",
        },
        bouquet: {
          50: "#fbf9fa",
          100: "#f7f2f5",
          200: "#ebdfe6",
          300: "#dfccd7",
          400: "#c8a6b8",
          500: "#B0809A",
          600: "#9e738b",
          700: "#846074",
          800: "#6a4d5c",
          900: "#563f4b",
        },
        kimberly: {
          50: "#f9f8fb",
          100: "#f2f2f7",
          200: "#e0deea",
          300: "#cdcbdd",
          400: "#a7a3c4",
          500: "#817CAA",
          600: "#747099",
          700: "#615d80",
          800: "#4d4a66",
          900: "#3f3d53",
        },
        bismark: {
          50: "#f7f8f9",
          100: "#eef1f2",
          200: "#d5dcdf",
          300: "#bcc7cb",
          400: "#8a9da4",
          500: "#58737D",
          600: "#4f6871",
          700: "#42565e",
          800: "#35454b",
          900: "#2b383d",
        },
        "antique-brass": {
          50: "#fcf9f7",
          100: "#f9f3ef",
          200: "#efe2d8",
          300: "#e5d0c1",
          400: "#d2ac92",
          500: "#BF8963",
          600: "#ac7b59",
          700: "#8f674a",
          800: "#73523b",
          900: "#5e4331",
        },
        tumbleweed: {
          50: "#fdfaf8",
          100: "#fbf6f1",
          200: "#f4e8dd",
          300: "#edd9c8",
          400: "#e0bd9f",
          500: "#D3A176",
          600: "#be916a",
          700: "#9e7959",
          800: "#7f6147",
          900: "#674f3a",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
