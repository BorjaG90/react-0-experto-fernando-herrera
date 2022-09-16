import React from 'react';
import ReactDOM from 'react-dom/client';

import { FirstApp } from './FirstApp';
import { HelloWorldApp } from './HelloWorldApp';

import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    <HelloWorldApp />
    <FirstApp title="Hola, soy Borja" subtitle={123} />
  </React.StrictMode>
);
