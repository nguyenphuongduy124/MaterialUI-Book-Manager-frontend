import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
const store = configureStore({
  reducer: rootReducer,
});
ReactDOM.render(
  <React.StrictMode>
    <ScopedCssBaseline>
      <Provider store={store}>
        <App />
      </Provider>
    </ScopedCssBaseline>
  </React.StrictMode>,
  document.getElementById('root'),
);
serviceWorker.unregister();
