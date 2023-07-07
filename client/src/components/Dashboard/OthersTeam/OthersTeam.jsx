import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import TeamCard from "../MyTeams/TeamCard";
import { toast } from "react-toastify";


const OthersTeam = () => {
    const { user } = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [inviteTeams, setInviteTeams] = useState([]);

    useEffect(() => {
        if (user?.displayName) {
            setUserName(user?.displayName);
        }

    }, [user]);

    useEffect(() => {
        const usersData = async () => {
            try {
                let usersDataLoad;
                let allTeams;

                if (userName) {
                    usersDataLoad = await fetch(`http://localhost:5000/api/v1/teams/invite?user=${userName}`);
                    allTeams = await usersDataLoad.json()

                }
                if (allTeams?.data) {
                    setInviteTeams(allTeams.data);
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
                inviteTeams.length > 0 ?
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {
                            inviteTeams?.map((team, indx) => <TeamCard
                                key={indx}
                                userName={userName}
                                team={team}
                            />)
                        }
                    </div>
                    :
                    <div className="flex justify-center items-center h-full">
                        <p className=" text-2xl md:text-3xl text-blue-400">No team  has been invited yet!</p>
                    </div>

            }

        </>

    );
};

export default OthersTeam;