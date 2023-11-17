/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./js/**/*.js", "./index.html", "./templates/**/*.html"],
  theme: {
    extend: {
      // 6 Breakpoints (375, 768, 1024, 1440, 1680)
      screens: {
        'xs': '375px',
        'sm': '768px',
        'md': '1024px',
        'lg': '1440px',
        'xl': '1680px',
        '2xl': '1920px',
      },
      colors: {
        green: "#007831",
        yellow: {
          100: "#F7FD36",
          200: "#D4D846",
        },
        lightgray: {
          100: "#F1F1EC",
          200: "#f8f8f5",
        },
        // 1E1E1E color
        black: {
          100: "#1E1E1E",
          200: "#202020",
          300: "#282828",
          900: "#000000",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}