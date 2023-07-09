/* eslint-disable react/prop-types */
import { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth"
import { app } from '../Firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState(null);
    const [userName, setUserName] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const getProfile=(displayName)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,{displayName:displayName})
    }
    const logOut =()=>{
        setLoading(true);
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setUserName(currentUser?.displayName);
            setEmail(currentUser?.email);
            setLoading(false)
        });
        return ()=>{
            unsubscribe()
        };
    },[loading, auth]);

    const info = {
        user,
        userName,
        email,
        loading,
        signUp,
        signIn,
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