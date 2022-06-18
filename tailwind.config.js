/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        menuHoverColor: "#6864CF",
        navHoverColor: "#D0D0D0",
      },
    },
  },
  plugins: [],
};
