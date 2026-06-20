import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // JBD Starr Brand Colors
        primary: '#003366', // Deep Navy Blue
        'primary-dark': '#001F3D',
        'primary-light': '#004D99',
        secondary: '#FFFFFF', // White
        accent: '#D4A574', // Warm Gold/Yellow
        'accent-dark': '#B8884A',
        'accent-light': '#E8C299',
        neutral: '#F5F5F5', // Light Gray/Silver
        'neutral-dark': '#E0E0E0',
        'text-primary': '#001F3D',
        'text-secondary': '#666666',
        'text-light': '#999999',
        'bg-dark': '#003366',
        'bg-light': '#F9F9F9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '28px'],
        xl: ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '36px'],
        '4xl': ['36px', '40px'],
        '5xl': ['48px', '54px'],
      },
      spacing: {
        '4.5': '1.125rem',
        '8.5': '2.125rem',
        '12.5': '3.125rem',
      },
      borderRadius: {
        '3xl': '24px',
      },
      boxShadow: {
        'elevation-1': '0 1px 3px rgba(0, 0, 0, 0.12)',
        'elevation-2': '0 3px 6px rgba(0, 0, 0, 0.16)',
        'elevation-3': '0 10px 20px rgba(0, 0, 0, 0.19)',
        'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 30px rgba(212, 165, 116, 0.15)',
        'gold-glow': '0 0 20px rgba(212, 165, 116, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-gentle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
      },
    },
  },
  plugins: [],
};

export default config;
