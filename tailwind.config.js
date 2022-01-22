module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        office: "url('../img/office.jpg')",
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: '#CC2D4A',
        secondary: '#8FA206',
        terciary: '#61AEC9',
      }),
    },
  },
  plugins: [],
};
