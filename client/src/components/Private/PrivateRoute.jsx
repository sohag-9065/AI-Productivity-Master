import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import {useLocation,Navigate} from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)
    if(user?.uid){
        return children
    }
    if(loading){
        return(
            <h1 className="text-7xl text-center text-red-600">Loading...</h1>
        )
    }
    return (
        <Navigate to="/signIn" state={{from:location}} replace></Navigate>
    );
};

export default PrivateRoute;