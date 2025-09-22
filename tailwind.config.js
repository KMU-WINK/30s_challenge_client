/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#93C5FD",
        "primary-background": "#F1F5F9",
        secondary: "#737373",
        "secondary-background": "#F4F4F5",
        success: "#86EFAC",
        "success-background": "#F0FDF4",
        warning: "#FED7AA",
        "warning-background": "#FFF7ED",
        danger: "#FDA4AF",
        "danger-background": "#FFF1F2",
      },
      boxShadow: {
        base: "0px 4px 4px 0px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};
