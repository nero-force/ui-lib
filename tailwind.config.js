module.exports = {
  content: ["./src/**/*.{html,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'background': 'var(--color-background)',
        'text': 'var(--color-text)',
        'text-heading': 'var(--color-text-heading)',
        // Add your other color variables
      },
      fontFamily: {
        'heading': 'var(--font-family-heading)',
        'text': 'var(--font-family-text)',
        // Add your other font family variables
      },
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'md': 'var(--font-size-md)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        'xxl':'var(--font-size-xxl)',
        'xxxl': 'var(--font-size-xxxl)',
        // Add your other font size variables
      },
      lineHeight: {
        'none': 'var(--line-height-none)',
        'tight': 'var(--line-height-tight)',
        'snug': 'var(--line-height-snug)',
        'normal': 'var(--line-height-normal)',
        'relaxed': 'var(--line-height-relaxed)',
        'loose': 'var(--line-height-loose)',
        // Add your other line height variables
      },
      // Add other theming properties that need to use CSS variables
    },
  },
  // ...other Tailwind configuration
};
