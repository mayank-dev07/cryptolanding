/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        iBrand_Regular: ["iBrand_Regular", "sans-serif"],
        "SuisseIntl-Medium": ["SuisseIntl-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
