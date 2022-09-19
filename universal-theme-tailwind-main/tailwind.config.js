module.exports = {
  prefix:'tw-',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
   
    minHeight: {
      'ntbh': '70px'
    },
    extend: {
      screens: {
        'xs': '320px',
      // => @media (min-width: 320px) { ... }
        'ipadPro': {'min': '1024px', 'max': '1199px'},
        'ipad': {'min': '768px', 'max': '1023px'},
        'mobile': {'max': '767px'},
        'extraSmall': {'max': '450px'},
        'min750': {'min': '750px'},
        'max991': {'max': '991px'},
        'max749': {'max': '749px'},
        'min1024': {'min': '1024px'},
        'min1280': {'min': '1280px'},
        'min990': {'min': '990px'}
      },
      fontFamily: {
        'heading': 'var(--font-heading-family)',
        'helveticCon': 'Helvetica Condensed',
      },
      colors: {
        'darkgrey': 'rgb(108,117,125)',
      },
      width: {
        'w28': '28%',
      },
      backgroundColor:{
        'textsectionbg':'var(--textsec-bg-color)',
      },
      backgroundImage: {
        'newsletter': 'var(--newsletter-background-image)',
        'checkbox-arrow': 'var(--checked-arrow-image)',
        'ageGate': 'var(--ageGate-background-image)',
      },
      backgroundPosition: {
        'newsletter-image-position': '50%',
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
        fadeindown: 'fadeindown 0.5s ease-out forwards',
        fadeoutdown: 'fadeoutdown 0.5s ease-out forwards',
        fadeinUp: 'fadeinUp 500ms ease-in-out forwards',
        fadeoutup: 'fadeoutup 0.5s ease-out forwards'
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        fadeindown: {
          '0%': {
              opacity: '0',
              transform: 'translateY(-10px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
      },
      fadeoutdown: {
          'from': {
              opacity: '1',
              transform: 'translateY(0px)'
          },
          'to': {
              opacity: '0',
              transform: 'translateY(10px)'
          },
      },
      fadeinUp: {
          'from': {
            opacity: '0',
            transform : 'translateY(40px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          },
      },
      fadeoutup: {
          'from': {
              opacity: '1',
              transform: 'translateY(0px)'
          },
          'to': {
              opacity: '0',
              transform: 'translateY(10px)'
          },
      }
      },
      maxWidth: {
        'maxW600': '600px',
        'page-width': 'var(--page-width)',
        'nmw':'1040px',
        'ntbw':'36%',
        'nlmw':'724px',
        'newsletterMW': '1024px',
        'lg': '990px',
        'maxW': '100%',
      },
      padding: {
        '56p': '56%',
      },
      outlineOffset: {
        '0.3rem': '0.3rem',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}