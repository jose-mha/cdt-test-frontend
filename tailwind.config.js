module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        office: "url('../img/office.jpg')",
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        principal: '#CC2D4A',
        secondary: '#8FA206',
        tertiary: '#61AEC9',
      }),
      textColor: {
        principal: '#0099ff',
        secondary: '#8FA206',
        tertiary: '#61AEC9',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
