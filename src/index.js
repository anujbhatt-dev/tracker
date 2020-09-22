import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import axios from "axios"

// axios.defaults.baseURL="https://penizgun.firebaseio.com"

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
