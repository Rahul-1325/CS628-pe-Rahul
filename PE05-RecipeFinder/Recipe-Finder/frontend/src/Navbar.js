import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h2>Recipe Finder</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add-recipe">Add Recipe</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
