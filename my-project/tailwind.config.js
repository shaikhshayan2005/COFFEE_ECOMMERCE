/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
     colors:{
       primary : "#f97316",
       primaryDark: '#c65a10',
       secondary : "#64748b",
       lightOrange : "#f1dabf",
       darkGray :"#1a1f25",
       lightGray :"#272c35",

     },

     container :{
       center :"true",
       padding :{
        DEFAULT :"1rem",
        sm :"2rem",
       },
     },

    },
  },
  plugins: [],
}

