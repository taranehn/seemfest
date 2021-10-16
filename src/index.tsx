import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'lalezar',
    ].join(','),
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

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
