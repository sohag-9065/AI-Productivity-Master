import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import TeamCard from "./TeamCard";


const MyTeams = () => {
    const { user } = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [myTeams, setmyTeams] = useState([]);



    useEffect(() => {
        if (user?.displayName) {
            setUserName(user?.displayName);
        }

    }, [])

    useEffect(() => {
        const usersData = async () => {
            let usersDataLoad;
            let allusers;

            if (userName) {
                usersDataLoad = await fetch(`http://localhost:5000/api/v1/teams?teamleader=${userName}`);
                allusers = await usersDataLoad.json()
            }
            if (allusers?.data) { 
                setmyTeams(allusers.data);
            }
        }
        usersData();

    }, [userName])


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {
                myTeams?.map((team, indx) => <TeamCard
                    key={indx}
                    team={team}
                />)
            }
        </div>
    );
};

export default MyTeams;