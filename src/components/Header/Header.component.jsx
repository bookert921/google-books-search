import React from 'react';
import Logo from '../../assets/logo__clear__book-background.svg';
import './Header.styles.css';

const Header = () => {
    return (
        <header className="navbar">
            <div className="navbar-brand">
                <img
                    className="brand-logo"
                    src={Logo}
                    alt="Book N Beyond Logo Home Button"
                />
            </div>
            <div className="title">
                <h1>Explore Our Book Search through GoogleAPI</h1>
            </div>
        </header>
    );
};

export default Header;
