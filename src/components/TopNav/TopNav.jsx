import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <nav className='bg-[#355C7D] text-white'>
            <div className='my-container  md:h-11 md:flex justify-between items-center'>
                <div>
                    <p>Create Your Own Coustom Resourch. <Link className='underline'>Learn How?</Link></p>
                </div>
                <div>
                    <Link to="/register">Login / Register</Link>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;