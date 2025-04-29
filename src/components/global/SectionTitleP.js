import React from 'react';
import '../contact/contact.css';

//Utiliser pour les pages: Mention légales, Portfolio Services.

const SectionTitleP = (props) => {
  return (
    <section className="py-1 text-center container">
      <div className="row pt-5 mb-5">
        <div className={`mx-auto  ${props.isWide ? 'col-lg-12' : 'col-lg-6'}`}>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          <div className="custom-border mx-auto section-title-border"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionTitleP;
