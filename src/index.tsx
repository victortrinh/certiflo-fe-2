import './internalization/i18n';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Open Sans:300,400,600,700,800', 'sans-serif'],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
