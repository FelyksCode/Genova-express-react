/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        maps: "url('./Assets/Map/MapsUfestTXT.png')",
      },
    },
  },
  plugins: [],
};
