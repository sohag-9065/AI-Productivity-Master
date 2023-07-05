import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";

 
const OthersTeam = () => {
    const { user } = useContext(AuthContext);
    const [userName, setUserName] = useState("");

    useEffect( () => {
        if(user.displayName)  {
            setUserName(user.displayName);
        }

    }, [user])

    return (
        <div>
            <h2>but</h2>
        </div>
    );
};

export default OthersTeam;