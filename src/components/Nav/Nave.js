import React from 'react';
import { NavLink } from 'react-router-dom';
import Identify from '../Identify';
import './nav.css';

const Nav = () => {
  const links = [
    { id: 1, to: '/', label: 'Home' },
    { id: 2, to: '/services', label: 'Services' },
    { id: 3, to: '/portfolio', label: 'Portfolio' },
    { id: 4, to: '/contact', label: 'Contact' },
    { id: 5, to: '/legal-notices', label: 'Mentions légales' },
  ];

  return (
    <header>
      <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid ms-5 me-5">
          <Identify
            className="navbar-brand text-white text-uppercase"
            name="John Doe"
          ></Identify>
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
                <li key={link.id} className="nav-item text-nowrap">
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
