/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/html/*.html"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#f5f7fa",
          100: "#e9eef5",
          200: "#cedae9",
          300: "#a3bad6",
          400: "#7297be",
          500: "#507aa7",
          600: "#3d618c",
          700: "#334e71",
          800: "#2d445f",
          900: "#2a3a50",
          950: "#1e293a",
        },
      },
    },
  },
  plugins: [],
};
