/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Exeter burgundy/maroon
        burgundy: {
          DEFAULT: '#7b1e34',
          50: '#fef2f4',
          100: '#fde6ea',
          200: '#fbd0d9',
          300: '#f7aabb',
          400: '#f17795',
          500: '#e74d72',
          600: '#d22a5a',
          700: '#b01d48',
          800: '#7b1e34',
          900: '#6f1c32',
          950: '#3e0a17',
        },
        // Warm cream for backgrounds
        cream: {
          DEFAULT: '#faf7f2',
          50: '#fdfcfa',
          100: '#faf7f2',
          200: '#f5efe5',
          300: '#ede3d2',
          400: '#e2d3ba',
          500: '#d4c09e',
          600: '#c4a87e',
          700: '#b08d5e',
          800: '#8e7049',
          900: '#745c3d',
        },
        // Dark charcoal for text
        charcoal: {
          DEFAULT: '#2d2d2d',
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#2d2d2d',
          950: '#1a1a1a',
        },
        slate: colors.slate,
      },
      fontFamily: {
        // Traditional serif for headlines - similar to Exeter's editorial feel
        display: ['Playfair Display', 'Georgia', 'serif'],
        // Clean sans-serif for body
        body: ['Source Sans 3', 'system-ui', 'sans-serif'],
        // Spaced caps for wordmark
        wordmark: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 10vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-xl': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        'widest': '0.25em',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
