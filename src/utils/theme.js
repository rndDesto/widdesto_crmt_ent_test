import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#E8590C',
    },
    secondary: {
      main: '#DE1B1B',
    },
    background:{
        blue: '#007bc1',
        dblue: '#004a75',
        orage: '#ff8000',
        dorange: '#cc6600',
        smokegrey: '#e5e5e5',
        white: '#ffffff'
    }
  },
  typography: {
    fontSize: 12,
    h3:{
      color: 'red',
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 960,
      lg: 1024,
      xl: 1366,
    },
  },
});

export default theme;
