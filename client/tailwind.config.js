/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        iceberg: ['Iceberg', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        libertinus: ['"Libertinus Sans"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        iceberg: ['Iceberg', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

