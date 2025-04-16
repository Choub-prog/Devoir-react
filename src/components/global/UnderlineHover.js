import React, { useState } from 'react';

const UnderlineHover = ({ className, children }) => {
  const [hovered, setHovered] = useState(false);

  const style = {
    fontWeight: hovered ? 'bold' : 'normal',
  };

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={className}
      style={style}
    >
      {children}
    </span>
  );
};

export default UnderlineHover;
