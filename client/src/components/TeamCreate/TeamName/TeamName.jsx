 

/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { AiOutlineReload } from "react-icons/ai"; 
import { useState } from "react"; 
import Loading from "../../shared/Loading";
import teamNameGenerate from "../../../promptEngineer/teamNameGenerate";

const TeamName = ({ teamName, setTeamName }) => {

    const [isLoading, setIsLoading] = useState(false);

    const handleNameChange = e => {
        e.preventDefault();
        setTeamName(e.target.value);
    };

    return (
        <div>

            <div className='mt-6 mb-2 flex flex-col md:flex-row md:items-center  '>
                
                <p className="text-sm mx-3 ">Team Name: <span className='text-red-600'>*</span>   </p>

                <p
                    onClick={() => teamNameGenerate(setTeamName, setIsLoading)}
                    className="mr-4 text-sm  px-3 py-1 rounded-full  bg-secondary/[.6] hover:bg-secondary/[.8] text-white flex justify-center items-center cursor-pointer">
                    <AiOutlineReload className='mr-2' />
                    Generate with AI
                </p>

                {
                    isLoading && <Loading />
                }

            </div>

            <input
                value={teamName}
                onChange={handleNameChange}
                type="text"
                className='border-[1px] border-slate-300 w-full focus:outline-0 px-5 py-3 rounded-full '
            />

        </div>
    );
};

export default TeamName;