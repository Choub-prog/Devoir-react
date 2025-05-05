import React from 'react';
import './footer.css';
import HoverIcon from './HoverIcon';
import UnderlineHover from '../global/UnderlineHover';
import isLinkElement from '../global/isLinkElement';

function UnorderedList({ items }) {
  return (
    <ul className="list-unstyled">
      {items.map((item, i) => {
        if (React.isValidElement(item)) {
          if (isLinkElement(item)) {
            return (
              <li key={i}>
                <UnderlineHover>
                  {React.cloneElement(item, {
                    className: 'text-white text-decoration-none',
                  })}
                </UnderlineHover>
              </li>
            );
          } else {
            return (
              <li key={i}>
                {React.cloneElement(item, {
                  className: 'text-white text-decoration-none',
                })}
              </li>
            );
          }
        }

        if (item.type === 'icons') {
          return (
            <li key={i}>
              {item.icons.map((icon, j) => (
                <a
                  key={j}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
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
