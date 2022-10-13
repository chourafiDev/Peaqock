/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#127682",
        dark: "#333",
        "base-gray": "#474747",
        "second-gray": "#99A5B5",
        "third-gray": "#99A5B5",
        "forth-gray": "#E6EAF0",
        "light-gray": "#F4F6FA",
        "gray-opacity": "#25252533",
      },
      backgroundImage: {
        banner: 'url("../assets/banner-bg.jpg")',
        "yellow-gradient":
          "linear-gradient(90deg, #F7AE28 -9.83%, #F8D061 104%)",
        "green-gradient":
          "linear-gradient(176.61deg, #127682 -3.6%, #20C7AB 126.31%);",
      },
    },
  },
  plugins: [],
};
