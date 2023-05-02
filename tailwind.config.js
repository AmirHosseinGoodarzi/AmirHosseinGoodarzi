/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        blueGradStart: "#007CF0",
        blueGradEnd: "#00DFD8",
        purpleGradStart: "#7928CA",
        purpleGradEnd: "#FF0080",
        orangeGradStart: "#FF4D4D",
        orangeGradEnd: "#F9CB28",
        secondary: {
          light: {
            100: "#eaeaea",
            200: "#fafafa"
          },
          dark: {
            100: "#111",
            200: "#222",
            300: "#333",
            400: "#444",
          }
        }
      },
    },
  },
  plugins: [],
}