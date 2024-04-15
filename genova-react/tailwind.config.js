/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        maps: "url('./Assets/Map/MapsUfestNoTXT.webp')",
        mobile: "url('./Assets/Map/bgMapmobile.webp')",
      },
    },
  },
  plugins: [],
};
