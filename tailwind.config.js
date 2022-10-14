/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#127682",
        blue: "#388CBA",
        gold: "#F7AE28",
        purple: "#7B61FF",
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
        "green-gradient-2":
          "linear-gradient(103.12deg, #127682 -9.88%, #20C7AB 99.8%);",
        "blue-gradient":
          "linear-gradient(103.12deg, #388CBA -9.88%, #4BB1E9 99.8%);",
        "yellow-gradient":
          "linear-gradient(176.51deg, #F7AE28 -3.59%, #FFDE82 132.6%);",
        "purple-gradient":
          "linear-gradient(103.12deg, #5339DB -9.88%, #7B61FF 99.8%);",
      },
    },
  },
  plugins: [],
};
