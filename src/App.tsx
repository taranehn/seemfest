import React from 'react';
import './App.css';
import TopBar from './TopBar';
import { createMuiTheme, ThemeProvider } from '@mui/material';
import { IntlProvider } from 'react-intl'
import translationEN from './translation/en.json';
import Routing from './Routing';
import { BrowserRouter as Router } from "react-router-dom";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'lalezar',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#D0D0D0',
    },
    secondary: {
      main: '#FF6200',
    },
    text: {
      primary: '#0D0D0D',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 800,
      lg: 1100,
      xl: 1600,
    },
  },
});


function App() {

  const [lang, setLang] = React.useState("en")

  return (
    <ThemeProvider theme={theme}>
      <IntlProvider messages={translationEN} locale={lang} defaultLocale={lang}>
        <Router>
          <TopBar  />
          <Routing />
        </Router>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
