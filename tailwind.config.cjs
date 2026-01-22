/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  safelist: [
    'bg-[#cfb8a9]',
    'bg-[#141b1f]',
    'bg-[#283034]',
    'text-[#141b1f]',
    'text-[#283034]',
    'text-[#fce08b]',
    'border-[#141b1f]',
    'border-[#283034]',
    'fill-[#fce08b]',
  ],
  plugins: [],
};
