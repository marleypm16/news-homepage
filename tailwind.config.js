/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orange:{
          'title_primary' :'hsl(236, 13%, 42%)',
          'secondary': 'hsl(35, 77%, 62%)',
        } ,
        branco:{
          'texto' : 'hsl(36, 100%, 99%)'
        },
        background:{
          'section' : 'hsl(240, 100%, 5%)'
        },
        azul:{
          'texto': 'hsl(236, 13%, 42%)',
          'escuro' : 'hsl(233, 8%, 79%)'
        },
        button:{
          'primary':'hsl(5, 85%, 63%)',
        } ,

      },
      fontFamily: {
        'principal': ['Inter', 'sans-serif']
      },
      backgroundImage : {
        menuHamburguer: "url('./assets/icon-menu.svg')",
      },
      width :{
        '75-screen': '50vw',
      }
    },
    plugins: [],
  }
}

