import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


import App from './App';
import './sass/main.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider domain="dev-6hoqqjhetlobw8ix.us.auth0.com" clientId='4MrkqebaSOKbw2L1nI4MY0quu0WQVzUp' redirectUri={window.location.origin}>
    <App />
    </Auth0Provider>
  </React.StrictMode>
);

