import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import LegalNotices from './pages/LegalNotices';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal-notices" element={<LegalNotices />} />
        // path="*" Si l'url ne correpond à rien, renvoie sur Home.
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
