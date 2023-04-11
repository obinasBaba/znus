import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

//#ededed

// Create a theme instance.

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1600,
      xxxl: 1900,
    } as any,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          borderRadius: '0px',
          borderWidth: '2px',
          borderColor: 'black', // lineHeight: '100%'
        },
      },
    },
  },

  typography: {
    fontFamily: 'SofiaPro',
    h1: {
      fontFamily: 'Gramatika',
    },
  },
  palette: {
    primary: {
      main: '#000',
      // main: '#0052D4',

    },
    secondary: {
      main: '#8d8d8d',
    },
    error: {
      main: red.A400,
    },
  },
});

// responsiveFontSizes(theme, {})

export default theme;
