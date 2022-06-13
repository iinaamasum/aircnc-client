module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          // select your color according to the project
          primary: '#a991f7', // primary color
          secondary: '#f6d860', // secondary color
          accent: '#37cdbe', // accent color
          neutral: '#3d4451',
          'base-100': '#ffffff',
        },
      },
      // 'dark',
      'cupcake',
    ],
  },
};
