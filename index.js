import React from 'react';
import ReactDOM from 'react-dom/client';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import App from './App';
import { JourneysContextProvider } from './context/JourneyContext'
import { AuthContextProvider } from './context/AuthContext'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <JourneysContextProvider>
    <App />
    </JourneysContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

