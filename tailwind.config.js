/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    boxShadow: {
      my: '0px 20px 60.57143px 0px #E5E9F6',
      mynav: "4px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px	",
        xl: '1280px	',
        "xxl": '1320px',
        "2xl": '1536px',
        "xxxl": '1600px',
        "3xl": '1800px',
      },
      screens: {
        'max-xl': { 'max': '1280px' },

      },
      animation: {
        'load': 'wiggle 1000ms var(--d) linear infinite',
      },
      keyframes: {
        wiggle: {
          '25% ': {
            opacity: 1,
            transform: 'translateY(-20px)',
          },

          '50%': {
            opacity: 0.7,
            transform: 'translateY(0)',
          },
        }
      }
    }
  },
  plugins: [],
}

