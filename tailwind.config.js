module.exports = {
  purge: {
    enabled: true,

    /**
    DON'T
    content: [
      './site/layouts/*.html',
      './site/layouts/partials/*.html',
      './src/js/*.js',
      './src/css/*.css',
    ]


    DO
    content: [
      './site/layouts/list.html',
      './site/layouts/articles/*.html',
      './site/layouts/categories/*.html',
      './site/layouts/partials/components/*.html',
      './site/layouts/partials/illustrations/*.html',
      './src/js/*.js',
      './src/css/*.css',
    ]
    */

    content: []
  },
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        'fit-content': 'fit-content'
      },
      height: {
        'fit-content': 'fit-content'
      },
      fontFamily: {
        playfair: [
          "'Playfair Display'",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ]
      },
      boxShadow: {
        main: '24px 17px 0px 0px rgba(110,206,218,0.75)',
        secondary: '24px 17px 0px 0px rgba(195,226,221,0.75)',
      },
      screens: {
        'xs': '400px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
