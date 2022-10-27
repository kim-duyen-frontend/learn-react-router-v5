import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.scss";

function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <Link exact to="/home">Home</Link>
            </div>
        </div>
    );
}

export default Navbar;