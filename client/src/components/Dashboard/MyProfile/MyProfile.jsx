import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const MyProfile = () => {

    const [userName, setUserName] = useState("");
    const [userSkills, setUserSkills] = useState("");
    const [userInfo, setUserInfo] = useState("");
    const [value, setValue] = useState("");
    const { user } = useContext(AuthContext)
 

    useEffect(() => {
        if (user?.displayName) setUserName(user?.displayName)
    }, [user])


    useEffect(() => {

        const usersData = async () => {
            try{
                if(userName) {
                    const usersDataLoad = await fetch(`http://localhost:5000/api/v1/users?name=${userName}`)
                    const allusers = await usersDataLoad.json() 
         
                    setUserInfo(allusers.data[0])
                    setUserSkills(allusers.data[0]?.skills)
                }
            }
            catch(error) {
                toast.error(error.message)
            }
             
        }
        usersData();

    }, [userName])  

    const handleChange = e => {
        e.preventDefault();
        setValue(e.target.value);
    };

    const handleSkill = () => {
        console.log(value)
        let allSkills = "";
        if(userInfo?.skills ) { 
              allSkills = userInfo?.skills + ", " + value;
        }
        else { 
              allSkills = value;
        }
 
        fetch(`http://localhost:5000/api/v1/users`,
            {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ 
                    email: userInfo?.email,
                    skills: allSkills
                })
            })
            .then(res => res.json())
            .then(data => {
                setUserSkills(allSkills)
                setValue("") 
                toast.success('Skill updated successfully', { autoClose: 1000 })
                console.log(data); 

            })
            .catch(error => toast.error(error.message));
 
    }

    return (
        <div className=" flex flex-col justify-center items-center h-full space-y-10 ">
            <div className="    w-[350px] lg:w-[550px]  space-y-3  bg-slate-300 p-6 rounded-lg ">
                <FaUser className="text-4xl" />
                <p className="  text-4xl text-secondary font-bold  ">User: {userName}</p>
                <p className="  text-2xl    ">Email: {userInfo?.email}</p>
                <div className="flex gap-2">

                <p className="  text-2xl   ">Skills:  </p>
                <p className="  text-2xl   "> {userSkills}</p>
                </div>
            </div>

            <div className="w-[350px] lg:w-[550px] bg-slate-300 p-6 rounded-lg">
                <p className="mb-2 text-base text-slate-600">Add Skill:</p>
                <input
                    value={value}
                    onChange={handleChange}
                    type="text"
                    className={`    border-[1px] border-slate-300 w-full focus:outline-0 px-5 py-2 rounded-lg `}
                    // className="w-[600px] px-5 py-3 text-lg rounded-full border-2 border-gray-500 focus:border-gray-700 outline-none transition"
                    placeholder="Add your skills"
                />
                <button onClick={handleSkill} className=" w-full mt-3 bg-secondary/[.9] hover:bg-secondary/[.7] cursor-pointer  text-white px-10  font-medium   py-3 rounded-full " >
                    Add Skills
                </button>
            </div>

             

        </div>
    );
};

export default MyProfile;