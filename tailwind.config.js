/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueGradStart: "#007CF0",
        blueGradEnd: "#00DFD8",
        purpleGradStart: "#7928CA",
        purpleGradEnd: "#FF0080",
        orangeGradStart: "#FF4D4D",
        orangeGradEnd: "#F9CB28",
        customGray: "#888"
      },
    },
  },
  plugins: [],
}