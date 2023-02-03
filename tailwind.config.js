/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./page/*.html"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'black': "#000000",
        'white' : "#FFFFFF",  
        'main': "#E6E7BA",
        'second': "#FEFFEF",
        'footer': "#291120", 
        'button-color': "#899443",
      },
      // backgroundColor: {
      //   'main': "#E6E7BA",
      //   'main-bg': "#E6E7BA",
      //   'second': "#FEFFEF",
      //   'footer': "#291120", 
      //   'button-color': "#899443",
      //   'bg-none': "none",
      // },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        typey : ["typey", "serif"],
        typeyItalic : ["typey-italic", "italic"],
      },
      fontSize: {
        'normal-desktop': '24px',
        'normal-tablet': '20px',
        'normal-mobile': '12px',
        'smole-mobile': '10px',
        'big-desktop' : '48px',
        'Medium-desktop': '30px',
        'big-mobile': '28px',
        'medium-mobile': '24px',
      },
      borderRadius: {
        'big-desktop': '35px',
        'normal-desktop': '25px',
        'small-desktop': '20px',
        'normal-mobile' : '15px',
        'big-mobile' : '25px',
        'small-mobile' : '8px',
      }
    },
  },
  plugins: [],
}
