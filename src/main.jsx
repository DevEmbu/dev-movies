import { BrowserRouter } from 'react-router-dom';
import React from "react";
import ReactDOM from 'react-dom/client';
import Router from './routes/routes.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
)
