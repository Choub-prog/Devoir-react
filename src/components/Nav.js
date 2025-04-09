import React from 'react';
import { NavLink } from "react-router-dom"
import "../styles/Nav.css"


function isActive () {
    if ( isActive ) {
        
    }
}

const Nav = () => {
    return (
        <header>
            <nav className='navbar navbar-expand-lg bg-dark'>
                <div className='container-fluid'>
                <span className='navbar-brand'>John Doe</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id='navbarSupportedContent'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} nav-link`} to="/" >Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} nav-link`} to="/services" >Services</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} nav-link`} to="/projects" >Réalisations</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} nav-link`} to="/contact" >Contact</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} nav-link`} to="/legal-notices" >Mentions légales</NavLink>
                    </li>
            </ul>
            </div>
            </div>
        </nav>
</header>
    );
};

export default Nav;