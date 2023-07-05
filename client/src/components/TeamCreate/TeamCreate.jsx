
import Description from './Description/Description';
import TitleSelect from './TitleSelect';
import CategorySelect from './CategorySelect';
import MembarsAdd from './MembarsAdd/MembarsAdd';
import { useContext, useEffect, useState } from 'react';
import Deadline from './Deadline';
import TeamName from './TeamName';
import { AuthContext } from '../../context/AuthProvider';



const TeamCreate = () => {
    const [catagorydata, setCatagoryData] = useState("");
    const [projectTitle, setProjectTitle] = useState("");
    const [projectDescription, setProjectDescription] = useState([]);
    const [teamName, setTeamName] = useState("");
    const [userNames, setUserNames] = useState([]);

    const [errors, setErrors] = useState("");

    const { user } = useContext(AuthContext);
    const [userName, setUserName] = useState("");

    useEffect( () => {
        if(user?.displayName)  {
            setUserName(user.displayName);
        }

    }, [user])

    const validateForm = () => {
        if (teamName != "" && userNames) {
            setErrors("");
            setTeamName("");
            setUserNames([]);
            return true;
        } else if (!teamName) {
            setErrors("Please add Team Name");
        }
        else if (!userNames) {
            setErrors("Please add Membar");
        }

        return false;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return; 

        const userInfo =  userNames.map(value => {

            let status = "pending";
            if(value == userName) status = "accept";

            return {
                user: value,
                status
            }
        }) 

        const team = {
            teamleader: userName,
            teamName,
            userInfo
        }

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

            })
 
        console.log("Form Complete")
    };

    return (
        <div className="bg-gradient-to-t from-white via-[#E6FFFF] to-white  ">
            <div className='max-w-[1140px] mx-auto px-6 py-12  '>
                <h1 className='text-2xl md:text-4xl  text-center '><span className='border-b-2 pb-2 text-secondary border-slate-300'>Create your team</span></h1>
                <div className='flex justify-center items-center pt-6 pb-12'>
                    <div className="form-control relative w-[350px] sm:w-[500px] ">

                        {/* <CategorySelect setCatagoryData={setCatagoryData} />

                        <TitleSelect setProjectTitle={setProjectTitle} />

                        <Description setProjectDescription={setProjectDescription} /> 

                        <Deadline /> */}

                        <TeamName
                            teamName={teamName}
                            setTeamName={setTeamName}
                        />

                        <MembarsAdd
                            userNames={userNames}
                            setUserNames={setUserNames}
                        />

                        {
                            userNames.length != 0 ?
                                <div className='mt-12'>
                                    {errors && <div className="error  ">{errors}</div>}
                                    {/* <input type="submit" value="ss"   />  */}
                                    <input type="submit" onClick={handleSubmit} className='btn mt-0 w-full  bg-green-500 hover:bg-secondary/[.6] text-white' value="Create New Project & Team" />

                                </div>
                                :
                                <></>
                        }

                    </div>

                </div>


            </div>
        </div>
    );
};

export default TeamCreate;