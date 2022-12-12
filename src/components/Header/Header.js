import React from 'react';
import logo from '../../image/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header-parents'>
            <nav>
                <img src={logo} alt="coding home logo" />
            </nav>
            <h2>Coding Home</h2>
        </div>
    );
};

export default Header;