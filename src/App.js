import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import LegalNotices from './pages/LegalNotices';

import Nav from './components/Nav';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal-notices" element={<LegalNotices />} />
        // path="*" Si l'url ne correpond à rien, renvoie sur Home.
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
