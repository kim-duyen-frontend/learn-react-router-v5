import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.scss";

function Access() {
    return (
        <div className="accessPage">
            <div className="container">
                <h1 className="text">You do not have permission to access the site. <span className="note">Please <Link to="/">login</Link>!!!</span></h1>
            </div>
        </div>
    );
}

export default Access;