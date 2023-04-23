import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='my-container flex mx-auto justify-between h-24 items-center'>
            <div>
                <img src="https://dtguru.wpenginepowered.com/wp-content/themes/guru/images/logo.png" alt="" />
            </div>
            <nav className='list-none gap-4 flex'>
                <NavLink className={ ({isActive}) => (isActive ? 'active' : 'default')} to="/">Home</NavLink>
                <NavLink className={ ({isActive}) => (isActive ? 'active' : 'default')} to="/checklist" >CheckList</NavLink>
            </nav>
        </div>
    );
};

export default Header;