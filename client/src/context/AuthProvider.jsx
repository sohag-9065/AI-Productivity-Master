import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth"
import { app } from '../Firebase/firebase.config';
import { useEffect } from 'react';

const AuthProvider = ({children}) => {
    const AuthContext = createContext()
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const signUp = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const getProfile=(displayName)=>{
        return updateProfile(auth.currentUser,{displayName:displayName})
    }
    const logOut =()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        });
        return ()=>{
            unsubscribe()
        };
    },[])
    const info={
        user,
        loading,
        signUp,
        signIn,
        getProfile,
        logOut
    }
    
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;