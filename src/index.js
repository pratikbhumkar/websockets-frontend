import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const providerConfig = {
  domain: process.env.REACT_APP_DOMAIN,
  clientId: process.env.REACT_APP_CLIENTID,
  redirectUri: window.location.origin,
};

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider {...providerConfig}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
