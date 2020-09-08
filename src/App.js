import React from 'react';
import LandingPage from './pages/LandingPage';
import { ThemeProvider } from '@material-ui/core';
import theme from './utils/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
