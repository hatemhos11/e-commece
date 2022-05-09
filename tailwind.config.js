module.exports = {
  purge: [
    "./public/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.tsx",
  ],
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "success": "#28a745",
        "black": "#0a0c10",
        "gold": "#f5c518"
      },
      gridTemplateRows: {
        'main': 'auto 1fr auto', // for layout system in this project
      }
    },
  },
  plugins: [],
}
