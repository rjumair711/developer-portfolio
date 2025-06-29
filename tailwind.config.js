// tailwind.config.js
export default  {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'inset-right-black': 'inset -10px 0 15px -5px rgba(0,0,0,0.8)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
