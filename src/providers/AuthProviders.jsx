import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);
    
    const [loading, setLoading] = useState(true);

    // create new user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login existing user
    const userLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    // manage loggin user state
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged( auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        });
        return()=>{
            unsubscribe();
        }
    },[])
    // signout 
    const logOut = () =>{
        return signOut(auth)
    }
    const authInfo = {
        user,
        loading,
        createUser,
        userLogin,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;