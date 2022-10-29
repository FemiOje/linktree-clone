import React from 'react';
import ReactDOM from 'react-dom/client';  
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import NoMatch from './NoMatch.jsx'
import reportWebVitals from './reportWebVitals';
import Homepage from './routes/Homepage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <NoMatch />
  },
  {
        path: "*",
        element: <NoMatch />,
        errorElement: <NoMatch />,
  },
    ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
