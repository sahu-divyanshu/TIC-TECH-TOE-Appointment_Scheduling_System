/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        bg :"#F5F6F8",
        primary :"#FFFFFF",
        accent : "#FDA36F",
        text:"#061F25",

      }
    },
  },
  plugins: [],
};
