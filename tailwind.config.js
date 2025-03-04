/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a68ff",
        secondary: "#808089",
      },
      fontFamily: {
        title: ["popins", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
