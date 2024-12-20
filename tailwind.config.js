/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx,svg}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        orangeColor: "#ff8a5c",
        secondOrangeColor: "#eb7547",
        yellowColor: "#fbdf58",
        blackColor: "#383128",
        redColor: "#ff472b",
        grayColor: "#ebebeb",
        lightGrayColor: "#f1f1f1",
        greenColor: "#5c9e22",
        textGrayColor: "#696969",
      },
    },
    screens: {
      xs: "437px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
