/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/shared/Loading";

 
const ProtectRoute = ({children}) => {

    const { user, loadingUser } = useContext(AuthContext)
     
    const location = useLocation();

    if(loadingUser){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate to="/signIn" state={{ from : location }} replace></Navigate>
    }
    return children;
};

export default ProtectRoute;