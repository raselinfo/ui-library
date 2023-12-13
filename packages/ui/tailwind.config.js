/** @type {import('tailwindcss').Config} */
const sharedConfig = require("@repo/tailwind/tailwind.config.js");
export default {
  ...sharedConfig,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
};
