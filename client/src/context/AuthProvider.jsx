import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import { app } from '../Firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider()
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
    const googleLogin =()=>{
        return signInWithPopup(auth,provider)
    }
    const logOut =()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
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
        googleLogin,
        getProfile,
        logOut
    }
    
    return (
        <AuthContext.Provider value={info}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;