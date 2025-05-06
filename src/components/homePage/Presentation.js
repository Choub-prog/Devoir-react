import React from 'react';
import LoremP from './data/LoremP';
import Bar from './data/Bar';
import LayoutSection from '../global/LayoutSection';

const Presentation = () => {
  return (
    <LayoutSection
      childrenLeft={
        <>
          <h3 className="py-2 mb-5 border-bottom border-4 border-primary">A propos</h3>
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
          <h3 className="py-2 mb-5 border-bottom border-4 border-primary">
            Mes compétences
          </h3>
          <strong>
            <Bar valuep="html5 90%" width="90%" value={90} color="danger" />
          </strong>
          <strong>
            <Bar valuep="Css3 80%" width="80%" value={80} color="info" />
          </strong>
          <strong>
            <Bar valuep="Javascript 70%" width="70%" value={70} color="warning" />
          </strong>
          <strong>
            <Bar valuep="Php 60%" width="60%" value={60} color="success" />
          </strong>
          <strong>
            <Bar valuep="React 50%" width="50%" value={50} color="default" />
          </strong>
        </>
      }
    />
  );
};

export default Presentation;
