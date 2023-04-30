import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>;
    }

    if(user){
        return children;
    }
    return <Navigate state={{from : location}} to="/login" replace={true}>Login</Navigate>
};

export default PrivetRoute;