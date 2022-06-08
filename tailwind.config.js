module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./customComponents/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#111",
        light: "#fff",
        error: "#df4759",
        success : "#28a745",
        main: "#61DAFB",
        secondary: "#454545",
      },
    },
  },
  plugins: [],
};
