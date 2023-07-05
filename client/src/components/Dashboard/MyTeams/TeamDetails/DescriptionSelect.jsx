import React from 'react';
import { AiOutlineReload } from "react-icons/ai";

const DescriptionSelect = ({ taskTitle, value, setValue }) => {


    const handleChange = e => {
        const { target } = e;
        setValue(target.value);
    };



    return (
        <div>

            <div className='mt-3 mb-2 flex flex-col md:flex-row md:items-center  '>
                <p className="text-sm ml-1 ">Task Description <span className='text-red-600'>*</span>  </p>

                <p className={` ${taskTitle != "" ? "cursor-pointer" : "cursor-not-allowed"} text-sm mt-1 md:mt-0 ml-1 md:ml-3 py-1 px-3 rounded-full bg-secondary/[.8] hover:bg-secondary/[.6]  text-white flex justify-center items-center  `}>
                    <AiOutlineReload className='mr-2 ' />
                    Generate with AI
                </p>

            </div>

            <textarea
                value={value}
                onChange={handleChange}
                type="text"
                className={` ${taskTitle ? " " : "cursor-not-allowed"} border-[1px] border-slate-300 w-full focus:outline-0 px-5 py-2 rounded-lg `}
                placeholder="Enter task Description"
            />



        </div>
    );
};

export default DescriptionSelect;