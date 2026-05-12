/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#e5e7eb",
          bgLight: "#fefefe",
          primaryColor: "#134E4A",
          accent: "#407B77",
          bgButton: "#d1d5db",
          border: "#3a3a3a",
          text: "#374151",
          textLight: "#e5e7eb",
        },
      },
    },
  },
  plugins: [],
};
