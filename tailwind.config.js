/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-text-color": "#272B5A",
        "navigation-button-shadow": "#15a2c2d0",
        "navigation-shadow": "#128ba6",
        "searching-pokemon": "#DC2626",
        "searching-pokemon-shadow": "#9a1919",
        "pokemon-card-shadow": "#a2a4a7",
        "pokemon-card-details": "#6a788c"
      },
      backgroundImage: {
        "menu-button-gradient": "linear-gradient(to right, #DDAF00, #F5C542)",
        "hover-menu-button-gradient":
          "linear-gradient(to right, #af8b00, #e4aa0c)",
        "login-button-gradient": "linear-gradient(to right, #007C00, #00b500)",
        "hover-login-button-gradient":
          "linear-gradient(to right, #007200, #009900)",
        "logout-button-gradient": "linear-gradient(to right, #dd2f2f, #e45555)",
        "hover-logout-button-gradient":
          "linear-gradient(to right, #961919, #c32020)",
        "navigation-gradient": "linear-gradient(to right, #33c6e9, #67d5ee)",
        "searching-pokemon-input":
          "linear-gradient(to right, #e35353, #e66565)",
        "pokemon-card": "linear-gradient(to right, #ccd0d7, #e8eaed)",
      },
      fontFamily: {
        bangers: ["Bangers", "system-ui"],
        itim: ["Itim", "serif"]
      },
      screens: {
        "max-sm": { max: "639px" }, // Upewnij się, że breakpoint lg jest poprawnie ustawiony
      },
    },
  },
  plugins: [],
};