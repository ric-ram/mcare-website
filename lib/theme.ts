import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const theme = extendTheme({
    styles: {
        global: {
            'html, body': {
                fontSize: '16px'
            },
            'a': {
                fontSize: '16px'
            }
        }
    },
    colors: {
        pastelBlue: '#EFFBFF',
        lightBlue: 
        {
          50: '#e2f7fe',
          100: '#c4e2ec',
          200: '#a2cedc',
          300: '#7fbacd',
          400: '#5da5be',
          500: '#458da5',
          600: '#346e81',
          700: '#234e5d',
          800: '#102f3a',
          900: '#001218',
        }, 
        darkCustomBlue: '#073F56',
    }
})

export default theme