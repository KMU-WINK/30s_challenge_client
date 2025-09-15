// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // 👈 ts/tsx 포함
  ],
  theme: {
    extend: {
      colors: {
        primary: '#93C5FD',
        secondary: '#737373',
        success: '#86EFAC',
        warning: '#FED7AA',
        danger: '#FDA4AF',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
