import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { FaUser } from "react-icons/fa";
import { useQuery } from "react-query";
import userUpdate from "../../../loaders/update/userUpdate";
import { useForm } from "react-hook-form";

const MyProfile = () => {

    const { user } = useContext(AuthContext);
    const { register, formState: { errors }, reset, handleSubmit } = useForm();

    const [userName, setUserName] = useState("");
    const [userSkills, setUserSkills] = useState("");
    const [userInfo, setUserInfo] = useState(""); 

    const { data: userInfoArr, refetch } = useQuery('userInfo', () =>
        fetch(`http://localhost:5000/api/v1/users?name=${userName}`, {
            method: 'GET'
        }
        ).then(res => res.json()));



    useEffect(() => {
        if (user?.displayName) setUserName(user?.displayName)
    }, [user])

    useEffect(() => {
        refetch()
        setUserInfo(userInfoArr?.data[0])
        setUserSkills(userInfoArr?.data[0]?.skills)
    }, [userInfoArr, refetch])
 

    const userSkillsAdd = data => {

        const { skill } = data;

        let allSkills = "";
        if (userInfo?.skills) {
            allSkills = userInfo?.skills + ", " + skill;
        }
        else {
            allSkills = skill;
        }
 
        userUpdate(userInfo, allSkills, refetch)
        console.log(skill) 

        reset();
    };

    return (
        <div className=" flex flex-col justify-center items-center h-full space-y-10 ">
            <div className="    w-[350px] lg:w-[550px]  space-y-3  bg-slate-300 p-6 rounded-lg ">
                <FaUser className="text-4xl " />
                <hr className="text-slate-200 "/>

                <p className="  text-4xl text-secondary font-bold  ">User: {userName}</p>
                <hr className="text-slate-200 "/>

                <p className="  text-2xl    ">Email: {userInfo?.email}</p>
                <hr className="text-slate-200 "/>
                
                <div className="flex gap-2">

                    <p className="  text-2xl   ">Skills:  </p>
                    <p className="  text-2xl   "> {userSkills}</p>
                </div>
            </div>

            <div className="w-[350px] lg:w-[550px] bg-slate-300 p-6 rounded-lg"> 

                <form onSubmit={handleSubmit(userSkillsAdd)} className="form-control ">

                    <label className="label">
                        <span className="label-text">Add Skills</span>
                    </label>

                    <input
                        type="text"
                        className="input input-bordered mb-1 w-full"
                        placeholder='Skill added'
                        {...register('skill', {
                            required: "User skill is required",
                        })}

                    />
                    {errors.skill?.type === 'required' && <p className='text-red-600' role="alert">{errors.skill?.message}</p>}


                    <input type="submit" className='btn bg-secondary hover:bg-secondary/[.8]  text-white mt-6' value="Sign Up" />
                </form>

            </div>




        </div>
    );
};

export default MyProfile;