const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js",flowbite.content()],
  theme: {
    extend: {
      colors: {
        customGray: '#0D0D0D',
        'custom-yellow': '#CBD300'
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin(),
  ],
}