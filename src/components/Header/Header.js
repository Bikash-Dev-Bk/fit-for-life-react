import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div className='header-name'>
                <FontAwesomeIcon className='dumbbell' icon={faDumbbell} />
                <h1>FIT FOR LIFE</h1>
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