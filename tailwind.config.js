module.exports = {
  mode: 'jit',
  content: [
    './src/pages/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  media: false,
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0076E4',
        'primary-blue-rgb': '#0074e4',
        'color-dark': '#FFFFFF3B',
      },
      screens: {
        'xs-200': '200px',
        'xs-300': '300px',
        'xs-330': '330px',
        'xs-350': '350px',
        'xs-400': '400px',
        'xs-435': '435px',
        'sm-500': '500px',
        'sm-600': '600px',
        'sm-670': '670px',
        'sm-700': '700px',
        'sm-750': '750px',
        'sm-800': '800px',
        'md-900': '900px',
        'md-1000': '1000px',
        'lg-1040': '1040px',
        'lg-1100': '1100px',
        'lg-1140': '1140px',
        'lg-1200': '1200px',
        'xl-1300': '1300px',
        'xl-1400': '1400px',
        'child-screen': '1440px',
      },
    },
  },
  plugins: ['postcss-import', 'tailwindcss', 'autoprefixer'],
};
