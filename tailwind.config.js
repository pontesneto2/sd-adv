/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'sd-green': '#1e2b26',
        'sd-green-2': '#2f3d38',
        'sd-gold': '#c8a86b',
        'sd-gold-2': '#e4c891',
        'sd-paper': '#f7f6f3',
        'sd-ink': '#0f1312',
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [],
}

