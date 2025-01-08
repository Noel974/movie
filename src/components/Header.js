import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <ul>
                    <NavLink to="/">
                        <li>Film</li>
                    </NavLink>
                    <NavLink to="/coup-de-coeur">
                        <li>Coup de coeur</li>
                    </NavLink>
                </ul>
            </nav>
            <h1>Movie974</h1>
        </div>
    );
};

export default Header;
