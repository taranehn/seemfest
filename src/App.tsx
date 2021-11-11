import React from "react";
import TopBar from "./topbar/TopBar";
import Footer from "./Footer";
import { Box, createMuiTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { IntlProvider } from "react-intl";
import translationEN from "./translation/en.json";
import translationDE from "./translation/de.json";
import Routing from "./Routing";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["lalezar"].join(","),
  },
  palette: {
    primary: {
      main: "#1B1B1B",
      dark: "#1B1B1B",
      light: "#D0D0D0",
    },
    secondary: {
      main: "#DD5613",
    },
    text: {
      primary: "#D0D0D0",
      secondary: "#DD5613",
      disabled: "#1B1B1B",
    },
    background: {
      paper: "#D0D0D0",
      default: "#1B1B1B",
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
  de: translationDE,
  en: translationEN,
};

export type Langs = "en" | "de";

function App() {
  const [lang, setLang] = React.useState<Langs>("de");

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <IntlProvider
          messages={messagesConfig[lang]}
          locale={lang}
          defaultLocale={lang}
        >
          <Router>
            <TopBar lang={lang} onLangChange={setLang} />
            <Box paddingTop={6}>
              <Routing />
            </Box>
          </Router>
          <Footer />
        </IntlProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
