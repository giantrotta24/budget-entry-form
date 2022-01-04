import createCache from '@emotion/cache';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
