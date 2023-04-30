import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { useState } from 'react';

const Login = () => {
    const { userLogin, user } = useContext(AuthContext);
    const [error, setError] = useState("");
    
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(result => {
                const loggedUser = result.user;
                setError("");
            })
            .catch(error => {
                setError(error.message)
            })
    form.reset();
    }
    return (
        <div className='lg:w-[450px] mx-auto py-10'>
            <form onSubmit={handleLogin} className="card-body shadow-xl pt-3 bg-[#FFFFFF]">
                <label className="label">
                    {user && <span className="label-text">{user.email}</span>}

                </label>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <label className="label">
                    <span className="label-text">{error}</span>
                </label>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <p>Don't have any Account? <Link to="/register" className='text-green-600 underline'>Create Account</Link></p>
            </form>
        </div>
    );
};

export default Login;