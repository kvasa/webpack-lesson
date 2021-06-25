import React from 'react';
import ReactDOM from 'react-dom';

import Logo from './logo.png';
import './style.css';

const App = () => {
  return <h1>Hello from React 123. <img src={Logo} /></h1>
}

ReactDOM.render(<App />, document.getElementById('root'));