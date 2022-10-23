const nativewind = require("nativewind/babel")


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.js", "./src/**/*.{js,jsx,ts,tsx}"],
  plugins:[],
  presets: [nativewind],
};
