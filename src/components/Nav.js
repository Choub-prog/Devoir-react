import React from 'react';
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <header >
            <nav >
            <ul>
            <li>
                <Link to="/" >Accueil</Link>
            </li>
            <li>
                <Link to="/services" >Services</Link>
            </li>
            <li>
                <Link to="/projects" >Réalisations</Link>
            </li>
            <li>
                <Link to="/contact" >Contact</Link>
            </li>
            <li>
                <Link to="/" >Mentions légales</Link>
            </li>
            </ul>
            </nav>
        </header>
    );
};

export default Nav;