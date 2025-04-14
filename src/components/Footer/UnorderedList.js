import React from 'react';

function UnorderedList({ items }) {
  return (
    <ul className="list-unstyled">
      {items.map((item, i) => {
        if (typeof item === 'string') {
          return <li key={i}>{item}</li>;
        }

        if (React.isValidElement(item)) {
          return <li key={i}>{item}</li>;
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
                  <img src={icon.src} alt={icon.alt} />
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
