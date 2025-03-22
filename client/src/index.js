import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <App />
        <ToastContainer/>
    </BrowserRouter>
);