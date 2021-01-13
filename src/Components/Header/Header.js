import React from 'react';

import SearchBar from '../SearchBar/SearchBar';

function Header(){
    return (
        <header className="Header">
            <div className="Logo"></div>
            <SearchBar />
        </header>
    )
}

export default Header;