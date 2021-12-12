const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', ...fontFamily.sans]
      }
    },
  },
  plugins: [],
}
