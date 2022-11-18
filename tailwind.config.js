/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: { 
      colors: {
        'bleu-de-fond': 'hsl(217, 54%, 11%)',
        'bleu-block-fond': 'hsl(216, 50%, 16%)',
        'background-exp': '#202831'
      },backgroundColor: {
        'fotaise-color':'#89D5AF'
    },
    fontFamily: {
      'barlow': ['Barlow', 'sans-serif'],
      'fraunces': ['Fraunces', 'sans-serif']
    }, 
  }, 
  
  }
}