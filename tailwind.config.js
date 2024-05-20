/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bayra-home": "url('./Images/Bayra_Home_Page.png')",
        "bayra-story": "url('./Images/story.jpeg')",
      },
    },
  },
  plugins: [],
};