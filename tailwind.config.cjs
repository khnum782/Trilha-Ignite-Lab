/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl':32,
    },
    colors:{
      tranparent: 'transparent',

      Black: '#000',
      white:'#fff',

      gray: {
      'gray-900': '#121214',
      'gray-800': '#282024',
      'gray-400': '#7c7c8a',
      'gray-200': '#c4c4cc',
      'gray-100': '#e1e1e6',
      },
      
      cyan:{
        'cyan-500': '#81d8f7',
        'cyan-300': '#9be1f8',
      },
     
    },
    extend: {
      fontFamily:{
        sans: 'inter, sans-serif'
      },
    },
  },
  plugins: [],
}
