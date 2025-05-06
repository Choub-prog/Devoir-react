import React from 'react';

// Utilisé pour l'affichage dans contact et home.

const LayoutSection = ({ childrenLeft, childrenRight }) => {
  return (
    <section>
      <div className="container px-0">
        <div className="row m-1 px-1 mt-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <div className="col-12 col-md-6">{childrenLeft}</div>
          <div className="col-12 col-md-6">{childrenRight}</div>
        </div>
      </div>
    </section>
  );
};

export default LayoutSection;
