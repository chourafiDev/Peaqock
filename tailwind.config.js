/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#127682",
        "base-gray": "#474747",
        "second-gray": "#99A5B5",
        "third-gray": "#99A5B5",
        "forth-gray": "#E6EAF0",
        "gray-opacity": "#25252533",
      },
      backgroundImage: {
        banner: 'url("../assets/banner-bg.jpg")',
        "yellow-gradient":
          "linear-gradient(90deg, #F7AE28 -9.83%, #F8D061 104%)",
      },
    },
  },
  plugins: [],
};