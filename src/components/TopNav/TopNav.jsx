import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const TopNav = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch( error =>{})
    }
    return (
        <nav className='bg-[#355C7D] text-white'>
            <div className='my-container  md:h-11 md:flex justify-between items-center'>
                <div>
                    <p>Create Your Own Coustom Resourch. <Link className='underline'>Learn How?</Link></p>
                </div>
                <div>
                    {
                        user ? <>{user.email} <button onClick={handleLogOut}>Log Out</button></> : <Link to="/login">Login / Register</Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default TopNav;