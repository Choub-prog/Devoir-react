import React from 'react';
import { footerSections } from './footerData';
import UnorderedList from './UnorderedList';

const Footer = () => {
  return (
    <footer className="fixed-end py-4 bg-dark text-white">
      <div className="container">
        <div className="row text-start">
          {footerSections.map((section, index) => (
            <div className="col-md-4 py-2" key={index}>
              <h3 className="fs-4">{section.title}</h3>
              <UnorderedList items={section.items} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
