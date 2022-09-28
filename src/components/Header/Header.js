import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div className='header-name'>
                <h1>FIT-FOR-LIFE</h1>
            </div>
            <div >
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/contacts">Contacts</a>
            </div>
        </nav>
    );
};

export default Header;