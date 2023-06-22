
import Description from './Description/Description';
import TitleSelect from './TitleSelect';
import CategorySelect from './CategorySelect';
import MembarsAdd from './MembarsAdd/MembarsAdd';
import { useState } from 'react';



const TeamCreate = () => {
    const [catagorydata, setCatagoryData] = useState("");
    const [projectTitle, setProjectTitle] = useState("");
    const [projectDescription, setProjectDescription] = useState([]);
    const [allMembars, setAllMembars] = useState([]);

    const [errors, setErrors] = useState("");


    const validateForm = () => {
        if (catagorydata && projectTitle && projectDescription && allMembars) {
            setErrors("");
            return true;
        } else {
            setErrors(" Please complete form! ");
            return false;
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        console.log("Form Complete")
    };




    console.log(catagorydata);
    console.log(projectTitle);
    console.log(projectDescription);
    console.log(allMembars);

    return (
        <div className="bg-gradient-to-t from-white via-[#E6FFFF] to-white  ">
            <div className='max-w-[1140px] mx-auto px-6 py-12  '>
                <h1 className='text-2xl md:text-4xl  text-center text-secondary'>Create your team with AI Master</h1>
                <div className='flex justify-center items-center pt-6 pb-12'>
                    <div className="form-control relative w-[350px] sm:w-[500px] ">

                        <CategorySelect setCatagoryData={setCatagoryData} />

                        <TitleSelect setProjectTitle={setProjectTitle} />

                        <Description setProjectDescription={setProjectDescription} />

                        <MembarsAdd setAllMembars={setAllMembars} />

                        <div className='mt-12'>
                            {errors && <div className="error  ">{errors}</div>}
                            {/* <input type="submit" value="ss"   />  */}
                            <input type="submit" onClick={handleSubmit} className='btn mt-0 w-full  bg-green-500 hover:bg-secondary/[.6] text-white' value="Create New Project & Team" />

                        </div>

                    </div>

                </div>


            </div>
        </div>
    );
};

export default TeamCreate;