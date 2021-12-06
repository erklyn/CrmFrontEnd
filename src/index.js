import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { CustomerWrapper } from './Controllers/StoreSession'



ReactDOM.render(
  <CustomerWrapper>
  <BrowserRouter>
   <App />
  </BrowserRouter>
  </CustomerWrapper>
  ,
  
  document.getElementById('root')
);
