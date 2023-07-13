/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {

        'background': "#0B0D17", 
        'text-primary': '#D0D6F9', 
        'text-secondary': "#FFFFFF", 

      }, 
      fontSize: {
        'heading-1': '150px', 
        'heading-2': '100px', 
        'heading-3': '56px', 
        'heading-4': '32px', 
        'heading-5': '28px', 
        'sub-heading-1': '28px', 
        'sub-heading-2': '14px', 
        'nav-text': '16px', 
      }, 
      letterSpacing: {
        'letter-sub-heading-1': '2.35',
        'letter-sub-heading-2': '2.7', 
        'letter-heading-5': '4.75', 
        'letter-nav-text': '2.7'
      }, 
      fontFamily: {
        'bellefair': ['Bellefair', 'serif'], 
        'barlow': ['Barlow', 'san-serif'], 
        'barlow-condensed': ['Barlow Condensed', 'sans-serif']
      }
    },
  },
  plugins: [],
}
