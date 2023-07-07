/* eslint-disable react/prop-types */


import { AiOutlineReload } from "react-icons/ai";

 
const TitleSelect = ({ value, setValue }) => {

    const handleAI = () => {
        
    }


    const handleChange = e => {
        const { target } = e;
        setValue(target.value);
    };



    return (
        <div>

            <div className='mt-3 mb-2 flex flex-col md:flex-row md:items-center  '>
                <p className="text-sm ml-1 ">Task Title <span className='text-red-600'>*</span>  </p>

                <p onClick={handleAI} className={`  cursor-pointer  text-sm mt-1 md:mt-0 ml-1 md:ml-3 py-1 px-3 rounded-full bg-secondary/[.8] hover:bg-secondary/[.6]  text-white flex justify-center items-center  `}>
                    <AiOutlineReload className='mr-2 ' />
                    Generate with AI sad
                </p>

            </div>
            <input
                value={value}
                onChange={handleChange}
                type="text"
                className={` border-[1px] border-slate-300 w-full focus:outline-0 px-5 py-2 rounded-full `}
                placeholder="Enter task title"
            />


        </div>
    );
};

export default TitleSelect;