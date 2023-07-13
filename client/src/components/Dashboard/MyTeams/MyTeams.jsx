import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider"; 
import TeamCard from "../TeamCard/TeamCard";
import { useQuery } from "react-query";
import Loading from "../../shared/Loading";


const MyTeams = () => {
 
    const { userName } = useContext(AuthContext);

    const { data: myTeams, isLoading, refetch } = useQuery('teamsmy', () =>
        fetch(`http://localhost:5000/api/v1/teams?teamleader=${userName}`, {
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
                myTeams?.data?.length > 0 ?
                    <div className={`grid grid-cols-1 gap-4   ${myTeams?.data?.length > 1 ? " lg:grid-cols-2" : " max-w-[600px] mx-auto "}`}>
                        {
                            myTeams?.data?.map((team, indx) => <TeamCard
                                key={indx}
                                team={team}
                                userName={userName}
                                refetch={refetch}
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