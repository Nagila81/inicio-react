/** @type {import('tailwindcss').Config} */
export default {
    >   content: ["./src/**/*.{html,js}"],
        theme: {
          colors: {
            "myGreen": "hsl(75, 94%, 57%)",
            "myGrey-700": "hsl(0, 0%, 20%)",
            "myGrey-800": "hsl(0, 0%, 12%)",
            "myGrey-900": "hsl(0, 0%, 8%)",            
          },
          fontFamily:{
            "Inter": '"Inter", sans-serif'
          }
        },
        plugins: [],
      }