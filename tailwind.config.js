module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', "Helvetica Neue", 'sans-serif']
      },
      colors: {
        'primary': '#222628',
        'secondary': '#2196F31A',
        'tertiary': '#151718',
        'primary-border': '#a5a19950',
        'secondary-border': '#a5a19950'
      },
    },
  },
  plugins: [],
}
