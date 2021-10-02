import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="my-3">
            <Link to="/meals" className="m-5">All Meals</Link>
            <Link to="/about" className="m-5">About</Link>
            <Link to="/mealdetails" className="m-5">Meal Details</Link>

        </nav>
    );
};

export default Header;