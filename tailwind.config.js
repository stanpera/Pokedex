/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "backgroundLight": "#B9DEFF",
        "backgroundDark": "#313131",
        "main-text-color": "#272B5A",
        "dark-main-text-color": "#E8D8B7",
        "navigation-button-shadow": "#15a2c2d0",
        "navigation-shadow": "#128ba6",
        "searching-pokemon": "#DC2626",
        "searching-pokemon-shadow": "#9a1919",
        "pokemon-card-shadow": "#a2a4a7",
        "dark-pokemon-card-shadow": "#222222",
        "pokemon-card-details": "#6a788c",
        "dark-pokemon-card-details": "#d5b77b",
        "errorText": "#e21313",
        "switcherColor": "#D1D5DB",
        "switcherShadow": "#a8acb1",
        "dark-red": "#891616",
        "dark-red-shadow": "#771414",
        "dark-black": "#222222"
      },
      backgroundImage: {
        "menu-button-gradient": "linear-gradient(to right, #DDAF00, #F5C542)",
        "hover-menu-button-gradient":
          "linear-gradient(to right, #af8b00, #e4aa0c)",
        "login-button-gradient": "linear-gradient(to right, #00a300, #00d700)",
        "hover-login-button-gradient":
          "linear-gradient(to right, #008600, #00a700)",
        "logout-button-gradient": "linear-gradient(to right, #dd2f2f, #e45555)",
        "hover-logout-button-gradient":
          "linear-gradient(to right, #961919, #c32020)",
        "navigation-gradient": "linear-gradient(to right, #33c6e9, #67d5ee)",
        "dark-navigation-gradient": "linear-gradient(to right, #1c1c1c, #222222)",
        "searching-pokemon-input":
          "linear-gradient(to right, #e35353, #e66565)",
        "pokemon-card": "linear-gradient(to right, #ccd0d7, #e8eaed)",
        "dark-pokemon-card": "linear-gradient(to right, #484848, #636363)",
        error: "linear-gradient(to right, #e21313, #f04b4b)",
        formInput: "linear-gradient(to right, #FFF3E8, #FFF9F4)",
      },
      fontFamily: {
        bangers: ["Bangers", "system-ui"],
        roboto: ["Roboto", "sans-serif"],
        itim: ["Itim"],
        openPasswordEye: ["fas fa-eye"],
        closedPasswordEye: ["fas fa-eye-slash"],
      },
      screens: {
        "max-sm": { max: "639px" }, // Upewnij się, że breakpoint lg jest poprawnie ustawiony
      },
    },
  },
  plugins: [],
};
