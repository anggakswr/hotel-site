module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '5px': '5px',
        '7px': '7px',
        '9px': '9px',
        '11px': '11px',
        '13px': '13px',
        '15px': '15px',
        '17px': '17px',
        '18px': '18px',
        '19px': '19px',
        '21px': '21px',
        '23px': '23px',
        '29px': '29px',
        '30px': '30px',
        '34px': '34px',
        '38px': '38px',
        '50px': '50px',
        '60px': '60px',
        '115px': '115px',
        '145px': '145px',
        '150px': '150px',
        '250px': '250px',
      },
      colors: {
        lightblue: '#00a1e5',
        'blue-brand': '#002d63',
        'gray-brand': '#dddddd',
        form: '#333333',
        night: '#757575',
      },
      borderRadius: {
        '3px': '3px',
        '5px': '5px',
      },
      fontSize: {
        '10px': '10px',
      },
    },
  },
  variants: {
    extend: {
      // backgroundColor: ['checked'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
