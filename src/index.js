import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/Home/App.js';
import About from './components/About/About.js';
import Myservices from './components/Myservices/Myservices.js';
import Contact from './components/Contact/Contact.js';
import Projects from './components/Projects/Projects.js';
import "./index.css";
import Education from './components/Education/Education.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <About />
    <Myservices />
    <Education />
    <Projects />
    <Contact />
  </React.StrictMode>
);

