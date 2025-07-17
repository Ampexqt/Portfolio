module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        background: "#161618",
        surface: "#1F2937",
        accent: "#7DD6C0",
        text: "#F2F2E9"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}