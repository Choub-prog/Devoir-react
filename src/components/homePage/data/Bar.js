import React from 'react';

//optimisation et utilisation de progress bar Bootstrap

const Bar = ({ width, value, color, valuep }) => {
  const commonAria = {
    role: 'progressbar',
    'aria-label': 'Succes example',
    'aria-valuemin': 0,
    'aria-valuemax': 100,
    'aria-valuenow': value,
  };

  return (
    <>
      <p className="mt-3 mb-1 text-uppercase">{valuep}</p>
      <div className="progress">
        <div
          className={`progress-bar bg-${color}`}
          style={{ width }}
          {...commonAria}
        ></div>
      </div>
    </>
  );
};

export default Bar;
