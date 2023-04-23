import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='p-4 bg-[#355C7D] text-white'>
            <div className='my-container flex justify-between items-center'>
            <h2 >@ 2023 Sojib | <Link className='underline'>Templates</Link></h2>
            <div>
                <Link className='footer-links' to="/">News</Link>
                <Link className='footer-links' to="/">Gallery</Link>
                <Link className='footer-links' to="/">Products</Link>
            </div>
            </div>
        </div>
    );
};

export default Footer;