import React from 'react';
import LoremP from './LoremP';

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
            <p className="mt-3 mb-1">Html5 90%</p>
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-danger"
                style={{ width: '90%' }}
              ></div>
            </div>
            <p className="mt-3 mb-1">Css3 80%</p>
            <div
              className="progress"
              role="progressbar"
              aria-label="Info example"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-info"
                style={{ width: '80%' }}
              ></div>
            </div>
            <p className="mt-3 mb-1">Javascript 70%</p>
            <div
              className="progress"
              role="progressbar"
              aria-label="Warning example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-warning"
                style={{ width: '70%' }}
              ></div>
            </div>
            <p className="mt-3 mb-1">Php 60%</p>
            <div
              className="progress"
              role="progressbar"
              aria-label="Danger example"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-success"
                style={{ width: '60%' }}
              ></div>
            </div>
            <p className="mt-3 mb-1">React 50%</p>
            <div
              className="progress"
              role="progressbar"
              aria-label="Danger example"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="progress-bar bg-default"
                style={{ width: '50%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
