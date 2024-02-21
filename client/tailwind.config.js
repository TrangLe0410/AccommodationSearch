/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html'
  ],
  theme: {

    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      width: {
        '1400': '1400px'
      },
      backgroundColor: {
        primary: '#F5F5F5',
        secondary1: '#1266dd',
        secondary2: '#f73859'
      },
      maxWidth: {
        '600': '600px',
      },
      cursor: {
        pointer: 'pointer'
      },

      boxShadow: {
        input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
        pricing: "0px 39px 23px -27px rgba(0, 0, 0, 0.04)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        testimonial: "0px 60px 120px -20px #EBEFFD",
      },
    },
  },
  plugins: [],
}

