import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
  const links = [
    { id: 1, to: '/', label: 'Home' },
    { id: 2, to: '/services', label: 'Services' },
    { id: 3, to: '/projects', label: 'Portfolio' },
    { id: 4, to: '/contact', label: 'Contact' },
    { id: 5, to: '/legal-notices', label: 'Mentions légales' },
  ];

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid ">
          <span className="navbar-brand text-white text-uppercase">
            John Doe
          </span>
          <button
            className="navbar-toggler navbar-light"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
            aria-controls="menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="menu">
            <ul className="navbar-nav ms-auto">
              {links.map((link) => (
                <li key={link.id} className="nav-item">
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `nav-link mx-2 text-uppercase item-nav-hover ${
                        isActive ? 'active-link' : 'text-white'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
