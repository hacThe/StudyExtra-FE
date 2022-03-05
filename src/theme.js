import { ThemeProvider, createTheme } from '@mui/material/styles';


const Theme = createTheme({
    palette: {
        primary: {
          main: '#00f',
        },
      },


      typography: {
        fontFamily: [
          'Montserrat',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
});

export default Theme