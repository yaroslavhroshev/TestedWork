import { createTheme } from '@mui/material/styles';

const globalTheme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      desktop: 481,
    },
  },
});

export default globalTheme;
