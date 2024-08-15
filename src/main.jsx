import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './redux/store.js';
import { ModalProvider } from './helpers/context/modal.context.jsx';

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

import App from './App.jsx';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6358dc',
      light: '#877ef1',
      dark: '#413a94',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f9329b',
      light: '#ff67b7',
      dark: '#b3236e',
      contrastText: '#ffffff',
    },
    background: {
      default: '#e9e9e9',
      paper: '#eeeeee',
    },
    text: {
      primary: 'rgba(0,0,0,0.92)',
      secondary: 'rgba(0,0,0,0.6)',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", sans-serif',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <ModalProvider>
              <App />
            </ModalProvider>
          </ThemeProvider>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);