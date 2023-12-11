import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import './index.scss';
import store from './redux/store';
import globalTheme from './muiTheme/globalTheme';

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={globalTheme}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </ThemeProvider>
  </Provider>,
);
