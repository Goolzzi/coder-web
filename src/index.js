import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/App';
import './index.css';

render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);
