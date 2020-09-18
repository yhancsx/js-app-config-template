import React from 'react';
import ReactDOM from 'react-dom';
import '../index.scss';

const App = function ({ sentence }: { sentence: string }) {
  return <div className="hello-world">{sentence}</div>;
};

ReactDOM.render(
  <App sentence={'hello world'} />,
  document.getElementById('root'),
);
