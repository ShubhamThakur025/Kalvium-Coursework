import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import imageData from './components/Data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App Data = {imageData}/>
  </React.StrictMode>
);

