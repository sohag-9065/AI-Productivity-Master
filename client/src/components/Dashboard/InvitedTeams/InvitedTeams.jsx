import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";  
import TeamCard from "../TeamCard/TeamCard";
import Loading from "../../shared/Loading";
import { useQuery } from "react-query";


const InvitedTeams = () => {
    const { userName } = useContext(AuthContext); 
 
    const { data: inviteTeams, isLoading, refetch } = useQuery('teamsinvite', () =>
        fetch(`http://localhost:5000/api/v1/teams/invite?user=${userName}`, {
            method: 'GET'
        })
            .then(res => res.json())
    ); 

    if (isLoading) {
        return (
            <div className='h-screen'>
              <Loading />
            </div>
          )
    } 

    return ( 
        <>
            {
                inviteTeams?.data?.length > 0 ?
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {
                            inviteTeams?.data?.map((team, indx) => <TeamCard
                                key={indx}
                                userName={userName}
                                team={team} 
                                refetch={refetch}
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

export default InvitedTeams;