import React from 'react';
import './App.css';
import TopBar from './TopBar';
import { createMuiTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { IntlProvider } from 'react-intl'
import translationEN from './translation/en.json';
import translationDE from './translation/de.json';
import Routing from './Routing';
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";

const theme3 = createMuiTheme({
  typography: {
    fontFamily: [
      'lalezar',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#D0D0D0',
      dark: '#0D0D0D',
      light: '#D0D0D0',
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

const messagesConfig = {
  'de': translationDE,
  'en': translationEN
};

export type Langs = "en" | "de";

function App() {
  const [lang, setLang] = React.useState<Langs>("de");

  return (
    <MuiThemeProvider theme={theme3}>
      <ThemeProvider theme={theme3}>
        <CssBaseline />
        <IntlProvider messages={messagesConfig[lang]} locale={lang} defaultLocale={lang}>
          <Router>
            <TopBar lang={lang} onLangChange={setLang} />
            <Routing />
          </Router>
        </IntlProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
