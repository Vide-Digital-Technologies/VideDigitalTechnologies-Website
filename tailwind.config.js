/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#015FC9',
        secondary: '#0BE1FF',
        light: '#F2F5F9',
        dark: '#16243D',
        darker: '#111827',
        body: '#787878'
      },
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif']
      },
    },
  },
  plugins: [],
}