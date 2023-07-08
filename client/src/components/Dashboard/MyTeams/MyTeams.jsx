import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider"; 
import { toast } from "react-toastify"; 
import TeamCard from "../TeamCard/TeamCard";


const MyTeams = () => {
    const { user } = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [myTeams, setmyTeams] = useState([]);

    useEffect(() => {
        if (user?.displayName) {
            setUserName(user?.displayName);
        }

    }, [user])

    useEffect(() => {
        const usersData = async () => {
            try {
                let usersDataLoad;
                let allTeams;

                if (userName) {
                    usersDataLoad = await fetch(`http://localhost:5000/api/v1/teams?teamleader=${userName}`);
                    allTeams = await usersDataLoad.json()
                }
                if (allTeams?.data) {
                    setmyTeams(allTeams.data);
                }
            } catch (error) {
                toast.error(error.message)
            }
        }
        usersData();

    }, [userName])


    return (
        <>
            {
                myTeams.length > 0 ?
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {
                            myTeams?.map((team, indx) => <TeamCard
                                key={indx}
                                team={team}
                                userName={userName}
                            />)
                        }
                    </div>
                    :
                    <div className="flex justify-center items-center h-full">
                        <p className=" text-2xl md:text-3xl text-blue-400">No team has been created yet!</p>
                    </div>

            }

        </>
    );
};

export default MyTeams;