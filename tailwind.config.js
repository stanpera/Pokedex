/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundLight: "#B9DEFF",
        backgroundDark: "#313131",
        "main-text-color": "#272B5A",
        "dark-main-text-color": "#E8D8B7",
        "navigation-button-shadow": "#15a2c2d0",
        "navigation-shadow": "#128ba6",
        "searching-pokemon": "#DC2626",
        "searching-pokemon-shadow": "#9a1919",
        "pokemon-card-shadow": "#a2a4a7",
        "dark-pokemon-card-shadow": "#222222",
        "pokemon-card-details": "#6a788c",
        "dark-second-text-color": "#d5b77b",
        errorText: "#e21313",
        switcherColor: "#D1D5DB",
        switcherShadow: "#a8acb1",
        "dark-red": "#891616",
        "dark-red-shadow": "#771414",
        "dark-black": "#222222",
        "main-gray": "#bbbbbb",
        "main-red": "#FF0000",
        "exit-arena": "#DDAF00",
      },
      backgroundImage: {
        "menu-button-gradient": "linear-gradient(to right, #DDAF00, #F5C542)",
        "dark-button-gradient": "linear-gradient(to right, #313131, #474747)",
        "hover-menu-button-gradient":
          "linear-gradient(to right, #af8b00, #e4aa0c)",
        "hover-dark-button-gradient":
          "linear-gradient(to right, #212121, #313131)",
        "login-button-gradient": "linear-gradient(to right, #00a300, #00d700)",
        "hover-login-button-gradient":
          "linear-gradient(to right, #008600, #00a700)",
        "dark-login-button-gradient":
          "linear-gradient(to right, #004700, #006100)",
        "hover-dark-login-button-gradient":
          "linear-gradient(to right, #003300, #004700)",
        "logout-button-gradient": "linear-gradient(to right, #dd2f2f, #e45555)",
        "hover-logout-button-gradient":
          "linear-gradient(to right, #961919, #c32020)",
        "navigation-gradient": "linear-gradient(to right, #33c6e9, #67d5ee)",
        "dark-navigation-gradient":
          "linear-gradient(to right, #1c1c1c, #222222)",
        "searching-pokemon-input":
          "linear-gradient(to right, #e35353, #e66565)",
        "dark-searching-pokemon-input":
          "linear-gradient(to right, #9c1919, #b11c1c)",
        "pokemon-card": "linear-gradient(to right, #ccd0d7, #e8eaed)",
        "dark-pokemon-card": "linear-gradient(to right, #484848, #636363)",
        error: "linear-gradient(to right, #e21313, #f04b4b)",
        "form-input": "linear-gradient(to right, #FFF3E8, #FFF9F4)",
        "dark-form-input": "linear-gradient(to right, #E8D8B7, #f1e7d2)",
        "dark-red-gradient": "linear-gradient(to right, #771414, #8f1818)",
        "hover-dark-red-gradient":
          "linear-gradient(to right, #601010, #771414)",
        "notification-green": "linear-gradient(to right, #00b700, #00dc00)",
        "notification-dark-green":
          "linear-gradient(to right, #004700, #006100)",
        "notification-red": "linear-gradient(to right, #dd2f2f, #e14545)",
        "notification-dark-red": "linear-gradient(to right, #771414, #8f1818)",
      },
      fontFamily: {
        bangers: ["Bangers", "system-ui"],
        roboto: ["Roboto", "sans-serif"],
        itim: ["Itim"],
        openPasswordEye: ["fas fa-eye"],
        closedPasswordEye: ["fas fa-eye-slash"],
      },
      screens: {
        "max-sm": { max: "639px" },
      },
      animation: {
        shake: "shake 0.5s ease-in-out infinite",
        shake2: "shake2 2s ease-in-out infinite",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-5px)" },
        },
        shake2: {
          "0%, 100%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(5px)" },
          "75%": { transform: "translateY(-5px)" },
        },
      },
    },
  },
  plugins: [],
};
