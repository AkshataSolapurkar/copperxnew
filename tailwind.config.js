/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./disk/*.{html,js}"],
    theme: {
      maxWidth:{
        "8xl":"1728px",
      },
      extend: {
        colors:{
          "blackend":"rgb(30 35 46)",
          "indigo":"rgb(76 99 237)",
          "grey-70":"rgb(70 79 96)",
          "grey-20":"rgb(19 23 31)",
          "grey-40":"rgb(136 145 163)",
          "blue":"rgb(95 118 249)",
        },
        backgroundColor:{
          "blue10":"rgb(233 237 245)",
          "grey-100":"rgb(19 23 31)",
          "grey-900":" rgb(30 35 46)",
          "grey-25":" rgb(247 249 252)",
          "grey-200":"rgb(188 195 209)",
        },
        backgroundImage:{
          "snippet":"radial-gradient(50% 50% at 50% 50%,#2d3442 0,rgba(30,35,46,0) 100%)",
        },
        borderColor:{
         "bordergrey": "rgb(213 219 229)",
         "bordergrey-100":"rgb(19 23 31)",
         "grey-200":"rgb(188 195 209)",
         "grey-20":"rgb(30 35 46)",
        },
        fontSize:{
          "64xl":"64px",
        },
        fontFamily:{
          "bannerfont":"Copyright Klim Type Foundry",
        },
        animation:{
          "animate-rotate-slow":"spin 50s linear infinite",
          "animate-rotate-slow-reverse":"spin 30s linear infinite",
          "animate-scroll":"scroll 266.85s linear infinite",
          "animate-rotate":"rotate 10s linear infinite",
          "run":"var(running);"
        },
      },
    },
    variants: {},
    plugins: [],
    
  }

