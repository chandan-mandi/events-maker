import React from 'react';
import MenuBar from '../../shared/MenuBar/MenuBar';
import TopBanner from '../TopBanner/TopBanner';
import './Header.css';

const Header = () => {
    return (
        <div className="main-header">
            <MenuBar/>
            <TopBanner/>
        </div>
    );
};

export default Header;