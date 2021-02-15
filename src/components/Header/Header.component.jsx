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
            <div className="title-container">
                <h1 className="title">Google Books API</h1>
                <h3 className="subtitle">Search for your favorite Books through Google</h3>
            </div>
        </header>
    );
};

export default Header;
