/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'port-main-color': '#754ef9',
        'port-second-color': '#550186',
        'port-bg-color': '#764ef960',
        'port-white-color': '#fff',
        'port-black-color': '#000',
        'port-primary-text-color': '#ede5f4',
        'port-text-color': '#373737',
        'port-dark-bg': '#151515',
        'port-dark-bg2': '#212121',
        'port-dark-bg3': '#424242',
        'port-dark-bg4': '#e8e8e8',
        'port-dark-text': '#e0e0e0',
        'port-dark-text2': '#a0a0a0',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

