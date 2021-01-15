import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from '../SearchBar/SearchBar';

function Header(){
    return (
        <header className="Header">
            <Link to="/">
            <div className="Logo">
            </div>
            </Link>
            <SearchBar />
        </header>
    )
}

export default Header;