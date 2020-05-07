import React from 'react';
import './style.css';

const Header=props=>{

    return (
        <header className="header">
            <nav className="headerMenu">
                <a href="#">Home</a>
                <a href="#">AboutUs</a>
                <a href="#">ContactUs</a>
            </nav>
            <div>
                Social media links
            </div>
        </header>
    )
}

export default Header;