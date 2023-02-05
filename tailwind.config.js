/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'thankyou.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#3b82f6',
        dark: '#292524',
        hover: '#0330fc',
        github: '#000000',
        instagram: '#ff75e5',
        facebook: '#3658d6',
        linkedin: '#3367d6',
        twitter: '#1da1f2',
      },
      screens:{
        'lg': '1024px',
      }
    },
  },
  plugins: [],
}
