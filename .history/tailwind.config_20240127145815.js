/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        'primary': 'var(--primary-color)',
      },
      backgroundColor: {
        'primary': 'var(--primary-color)',
        'secondary': 'var(--secondary-color)',
      },
    },
  },
  plugins: [],
};
