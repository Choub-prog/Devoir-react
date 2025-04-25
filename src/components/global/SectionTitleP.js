import React from 'react';

//Utiliser pour les pages: Mention légales, Portfolio Services.

const SectionTitleP = (props) => {
  return (
    <section className="py-1 text-center container">
      <div className="row pt-5 mb-5">
        <div className="col-lg-6 mx-auto">
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          <div className="custom-border mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionTitleP;
