import React from 'react';
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <header >
            <nav >
                <div>
                    <img src="assets/favicon/anonym.png" alt="logo" width={30} />
                    <div>
            <ul >
                <Link to="/">
                    <li>Accueil
                    </li>
                </Link>
                
                <Link to="/services">
                    <li>Services
                    </li>
                </Link>
                <Link to="/projects">
                    <li>Réalisations 
                    </li>
                </Link>
                    <Link to="/contact">
                    <li>Contact
                    </li>
                </Link>
                <Link to="/legal-notices">
                    <li>Mentions-légals
                    </li>
                </Link>
            </ul>
            </div>
            </div>
            </nav>
        </header>
    );
};

export default Nav;