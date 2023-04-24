import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';


const Register = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    
    const {user} = useContext(AuthContext);
    
    
    return (
        <div className='lg:w-[450px] mx-auto py-10'>
            <form onSubmit={handleSubmit} className="card-body shadow-xl pt-3 bg-[#FFFFFF]">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                </div>
                {
                    user && <h2>{user.displayName}</h2>
                }
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
                <p>Already have an account? <Link to="/login" className='text-sky-500 underline'>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;