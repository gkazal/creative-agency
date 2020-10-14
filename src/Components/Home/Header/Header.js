import React from 'react';
import Client from '../Client/Client';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container block -berry edge--bottom">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </div>
     
    );
};

export default Header;