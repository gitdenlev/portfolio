/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-cyan": "rgb(18, 247, 214)",
        "bg-color-body": "rgb(41, 47, 54)",
        "tooltip-color": "rgb(18, 247, 214)",
      },
    },
  },
  plugins: [],
};
