import React from 'react';
import LoremP from './LoremP';
import Bar from './Bar';
import LayoutSection from '../global/LayoutSection';

const Presentation = () => {
  return (
    <LayoutSection
      childrenLeft={
        <>
          <h2 className="py-2 mb-5 border-bottom border-4 border-primary">A propos</h2>
          <img
            className="img-fluid mb-3"
            src="/assets/images/john-doe-about.jpg"
            alt="John Doe"
          />
          <LoremP />
          <LoremP />
          <LoremP />
        </>
      }
      childrenRight={
        <>
          <h2 className="py-2 mb-5 border-bottom border-4 border-primary">
            Mes compétences
          </h2>
          <Bar valuep="html5 90%" width="90%" value={90} color="danger" />
          <Bar valuep="Css3 80%" width="80%" value={80} color="info" />
          <Bar valuep="Javascript 70%" width="70%" value={70} color="warning" />
          <Bar valuep="Php 60%" width="60%" value={60} color="success" />
          <Bar valuep="React 50%" width="50%" value={50} color="default" />
        </>
      }
    />
  );
};

export default Presentation;
