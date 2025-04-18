import React from 'react';

const Button = ({ type, color, onClick, children }) => {
  return (
    <button
      type={type || 'button'}
      className={`btn btn-${color} mt-3 px-4 py-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
