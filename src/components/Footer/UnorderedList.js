import React from 'react';
import './footer.css';
import HoverIcon from './HoverIcon';

function UnorderedList({ items }) {
  return (
    <ul className="list-unstyled">
      {items.map((item, i) => {
        if (typeof item === 'string') {
          return <li key={i}>{item}</li>;
        }

        if (React.isValidElement(item)) {
          return (
            <li key={i}>
              {React.cloneElement(item, {
                className: 'text-white text-decoration-none',
              })}
            </li>
          );
        }

        if (item.type === 'icons') {
          return (
            <li key={i}>
              {item.icons.map((icon, j) => (
                <a
                  key={j}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HoverIcon className={icon.class} alt={icon.title} />
                </a>
              ))}
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
}

export default UnorderedList;
