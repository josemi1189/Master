/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#f1f1f1",
          border: "#3a3a3a",
        },
      },
    },
  },
  plugins: [],
};
