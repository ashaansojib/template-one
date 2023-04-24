import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import App from '../App';

export const AuthContext = createContext(null);

const auth = getAuth(App);

const Auth = ({children}) => {
    
    const authInfo = () =>{
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Auth;