module.exports = {
  content: [`src/components/**/*.tsx`, `src/routes/**/*.tsx`, `src/root.tsx`],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}
