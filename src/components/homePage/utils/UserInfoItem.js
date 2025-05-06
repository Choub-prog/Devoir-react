import React from 'react';
import { NavLink } from 'react-router-dom';

// optimisation de la balise <li><li>

const UserInfoItem = ({ icon, link, content }) => {
  return (
    <li className="border-bottom border-1 border-secondary p-2">
      <i className={`bi ${icon} me-2`}></i>
      {link ? (
        <NavLink target="_blank" to={link}>
          {content}
        </NavLink>
      ) : (
        content
      )}
    </li>
  );
};

export default UserInfoItem;
