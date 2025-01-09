import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <nav aria-label="Navigation principale">
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" aria-label="Page d'accueil">
                            Film
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/coup-de-coeur" aria-label="Nos coups de cœur">
                            Coup de cœur
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/a-propos" aria-label="À propos de Movie974">
                            À propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <h1 className="site-title">Movie974</h1>
        </header>
    );
};

export default Header;
