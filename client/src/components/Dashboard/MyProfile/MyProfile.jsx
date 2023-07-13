import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { FaUser } from "react-icons/fa";
import { useQuery } from "react-query";
import userUpdate from "../../../loaders/update/userUpdate";
import { useForm } from "react-hook-form";
import Loading from "../../shared/Loading";

const MyProfile = () => {

    const { userName, email } = useContext(AuthContext);
    const { register, formState: { errors }, reset, handleSubmit } = useForm();

    const { data: userInfoArr, isLoading, refetch } = useQuery('userInfo', () =>
        fetch(`http://localhost:5000/api/v1/users?name=${userName}`, {
            method: 'GET'
        }
        ).then(res => res.json()));

       

    if (isLoading) {
        return (
            <div className='h-screen'>
                <Loading />
            </div>
        )
    }

    let usrssa = `http://localhost:5000/api/v1/users?name=${userName}`
    console.log(usrssa)


    const userSkillsAdd = data => {

        const { skill } = data;

        let allSkills = "";
        if (userInfoArr?.data[0]?.skills) {
            allSkills = userInfoArr?.data[0]?.skills + ", " + skill;
        }
        else {
            allSkills = skill;
        }

        userUpdate(email, allSkills, refetch)

        reset();
    };

    return (
        <div className=" flex flex-col justify-center items-center h-full space-y-10 ">
            <div className="    w-[350px] lg:w-[550px]  space-y-3  bg-slate-300 p-6 rounded-lg ">
                <FaUser className="text-4xl " />
                <hr className="text-slate-200 " />

                <p className="  text-4xl text-secondary font-bold  ">User: {userName}</p>
                <hr className="text-slate-200 " />

                <p className="  text-xl    ">Email: {email}</p>
                <hr className="text-slate-200 " />

                <div className="flex gap-2">

                    <p className="  text-xl   ">Skills:  </p>
                    <p className="  text-xl   "> {userInfoArr?.data[0]?.skills}</p>
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


                    <input type="submit" className='btn bg-secondary hover:bg-secondary/[.8]  text-white mt-6' value="Add Skills" />
                </form>

            </div>




        </div>
    );
};

export default MyProfile;