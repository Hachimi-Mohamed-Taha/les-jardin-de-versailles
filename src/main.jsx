import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import "./styles/globals.css";
import "./styles/globals.css";
import "./styles/home.css";
import "./styles/about.css";
import "./styles/services.css";
import "./styles/projects.css";
import "./styles/contact.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </StrictMode>,
)
