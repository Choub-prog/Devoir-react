import React from 'react';
import { dataAccordion } from './data/dataAccordion';

const Accordion = () => {
  return (
    <div className="container">
      <div className="accordion row px-3" id="accordionExample">
        {dataAccordion.map(({ id, header, content }, index) => (
          <div className="accordion-item px-0" key={id}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${index !== 0 ? 'collapsed' : ''} `}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${id}`}
                aria-expanded={index === 0 ? 'true' : 'false'}
                aria-controls={`collapse${id}`}
              >
                {header}
              </button>
            </h2>
            <div
              id={`collapse${id}`}
              className={`accordion-collapse collapse ${index === 0 ? 'show' : ' '}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">{content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
