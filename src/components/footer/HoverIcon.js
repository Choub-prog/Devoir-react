import React, { useState } from 'react';

const HoverIcon = ({ className, title }) => {
  const [hovered, setHovered] = useState(false);
  const enter = () => setHovered(true);
  const leave = () => setHovered(false);
  const style = {
    filter: hovered ? 'brightness(1.5)' : 'brightness(1)',
  };

  return (
    <i
      onMouseEnter={enter}
      onMouseLeave={leave}
      className={className}
      title={title}
      style={style}
    ></i>
  );
};

export default HoverIcon;
