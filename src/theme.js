import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1465FA', 
    },
    secondary: {
      main: '#2C3140', 
    },
    accent: {
        main: '#FAFAFA', 
      },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

export default theme;
