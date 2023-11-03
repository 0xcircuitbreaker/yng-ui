module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        'custom-blue': '#a1d7e1',
        'custom-yellow': '#ffe672'
      },
      textColor: {
        'custom-yellow': '#ffe672'
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.8)',
      },
      fontFamily: {
        'unbounded': ['Unbounded', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      fontSize: {
        'massive': '10rem',
      },
      boxShadow: {
        'custom-dark': '0 4px 8px 0 rgba(0, 0, 0, 0.8)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const textShadows = theme('textShadow');
      const newUtilities = {};
      Object.keys(textShadows).forEach(key => {
        const value = textShadows[key];
        newUtilities[`.text-shadow-${key}`] = {
          textShadow: value,
        };
      });
      addUtilities(newUtilities);
    }
  ],
};