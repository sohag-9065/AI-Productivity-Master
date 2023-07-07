
import MembarsAdd from './MembarsAdd/MembarsAdd';
import { useContext, useEffect, useState } from 'react';
import TeamName from './TeamName';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-toastify';

const TeamCreate = () => {
    const [teamName, setTeamName] = useState("");
    const [userNames, setUserNames] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    const [errors, setErrors] = useState("");

    const { user } = useContext(AuthContext);
    const [displayName, setDisplayName] = useState("");

    useEffect(() => {
        if (user?.displayName) {
            setDisplayName(user.displayName);
        }

    }, [user])


    const validateForm = () => {
        if (teamName != "" && userNames?.length > 0) {
            setErrors("");
            setTeamName("");
            setUserNames([]);
            return true;
        } else if (!teamName) {
            setErrors("Please add Team Name"); 
        }
        else if (userNames?.length <= 0) {
            setErrors("Please add Membar");
        }

        setTimeout(() => {
            setErrors("")
        }, 1500);

        return false;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;


        const team = {
            teamleader: displayName,
            teamName,
            userInfo,
            taskInfo: [],
            comments: []
        }

        console.log(team)

        fetch(`http://localhost:5000/api/v1/teams`, {
            method: "Post",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(team)
        })
            .then(res => res.json())
            .then(inserted => {
                console.log(inserted)
                setTeamName("");
                setUserNames([]);
                setUserInfo([]); 

                toast.success('Team Created Successfully', { autoClose: 1000 })

            })
            .catch(error => toast.error(error.message));

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

                        <MembarsAdd
                            userNames={userNames}
                            displayName={displayName}
                            setUserNames={setUserNames}
                            setUserInfo={setUserInfo}
                            userInfo={userInfo}
                        />

                        <div className='mt-12'>
                            {errors && <div className="error  ">{errors}</div>}

                            <input type="submit" onClick={handleSubmit} className='btn mt-0 w-full  bg-green-500 hover:bg-secondary/[.6] text-white' value="Create New Team" />

                        </div>

                    </div>

                </div>


            </div>
        </div>
    );
};

export default TeamCreate;