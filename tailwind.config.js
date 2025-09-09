// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        scrollLeft: 'scrollLeft 30s linear infinite',
        scrollRight: 'scrollRight 30s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
