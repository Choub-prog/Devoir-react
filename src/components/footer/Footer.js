import React from 'react';
import { footerData } from './data/footerData';
import UnorderedList from './utils/UnorderedList';

const Footer = () => {
  return (
    <footer className="fixed-end py-4 bg-dark text-white ps-4">
      <div className="container">
        <div className="row text-start">
          {footerData.map((section, index) => (
            <div className="col-md-4 py-2" key={index}>
              <h4 className="fs-4">{section.title}</h4>
              <UnorderedList items={section.items} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
