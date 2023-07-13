
import MembarsAdd from './MembarsAdd/MembarsAdd';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../shared/Loading';
import validateTeamCreate from '../../js/validate/validateTeamCreate';
import teamPost from '../../loaders/post/teamPost';
import TeamName from './TeamName/TeamName';
import MembarsTable from './MembarsTable/MembarsTable'; 

const TeamCreate = () => {
    const { user, loading } = useContext(AuthContext);

    const [teamName, setTeamName] = useState("");
    const [userNames, setUserNames] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    const [errors, setErrors] = useState("");
    const [displayName, setDisplayName] = useState("");

    useEffect(() => {

        if (user?.displayName) {
            setDisplayName(user.displayName);
        }

    }, [user]);

    if (loading) {
        return <Loading />
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateTeamCreate(teamName, userNames, setErrors)) return;

        setTeamName("");
        setUserNames([]);

        const team = {
            teamleader: displayName,
            teamName,
            userInfo,
            taskInfo: [],
            comments: []
        }

        teamPost(team);

        setTeamName("");
        setUserNames([]);
        setUserInfo([]);
    };

    return (
        <div className="bg-gradient-to-t from-white via-[#E6FFFF] to-white  ">
            <div className='max-w-[1140px] mx-auto px-6    '>
                <div className='flex justify-center items-center pt-6 pb-12 '>
                    <div className="form-control relative w-[350px] sm:w-[500px] bg-slate-300 px-6 py-12 rounded-lg ">
                        <h1 className='text-2xl md:text-4xl  text-center '><span className='border-b-2 pb-2 text-secondary border-slate-300'>Create your team</span></h1>

                        <TeamName
                            teamName={teamName}
                            setTeamName={setTeamName}
                        />

                        <div className='mt-6 mb-2 flex flex-col md:flex-row md:items-center  '>
                            <p className="text-sm ml-1 ">Add Team Membars: <span className='text-red-600'>*</span>  </p>
                        </div>

                        <MembarsTable
                            userNames={userNames}
                            setUserNames={setUserNames}
                        />

                        <MembarsAdd
                            userNames={userNames}
                            displayName={displayName}
                            setUserNames={setUserNames}
                            setUserInfo={setUserInfo}
                            userInfo={userInfo}
                        />

                        <div className='mt-8'>
                            {errors && <div className="error  ">{errors}</div>}

                            <input type="submit" onClick={handleSubmit} className='btn mt-0 w-full  bg-[#6f51a0] hover:bg-secondary/[.6] text-white' value="Create New Team" />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCreate;