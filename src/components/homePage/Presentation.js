import React from 'react';
import LoremP from './LoremP';
import Bar from './Bar';

const Presentation = () => {
  return (
    <section>
      <div className="container">
        <div className="row m-1 p-1 mt-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <div className="col-sm-12 col-md-6 ">
            <h2 className="py-2 mb-5 border-bottom border-4 border-primary">
              A propos
            </h2>
            <img
              className="img-fluid mb-3"
              src="/assets/images/john-doe-about.jpg"
              alt="John Doe"
            />
            <LoremP />
            <LoremP />
            <LoremP />
          </div>
          <div className="col-md-6 col-sm-12">
            <h2 className="py-2 mb-5 border-bottom border-4 border-primary">
              Mes compétences
            </h2>
            <Bar valuep="html5 90%" width="90%" value={90} color="danger" />
            <Bar valuep="Css3 80%" width="80%" value={80} color="info" />
            <Bar
              valuep="Javascript 70%"
              width="70%"
              value={70}
              color="warning"
            />
            <Bar valuep="Php 60%" width="60%" value={60} color="success" />
            <Bar valuep="React 50%" width="50%" value={50} color="default" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
