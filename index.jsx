import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';

const app = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

app();
