/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Loading from '../../../../../shared/Loading';
import { AiOutlineReload } from 'react-icons/ai'; 
import taskDescriptionGenerate from '../../../../../../promptEngineer/taskDescriptionGenerate';


const DescriptionSelect = ({ taskTitle, taskDescription, setTaskDescription }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
  

    useEffect(() => {
        if (taskTitle) setError("");
    }, [taskTitle]);


    const priviousTitleMatch = () => { 
 

        setIsLoading(true) ;

        fetch(`https://blue-sparkling-duck.cyclic.app/api/v1/titlesDescriptions?title=${taskTitle}`,{
            method: "get",
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(res => res.json())
            .then( res => {
                console.log(res);
                setIsLoading( false ); 
                setTaskDescription(res?.data?.taskDescription) ;
            })

    }

    const handleAI = async () => {

        if (!taskTitle) {
            setError("Complete task tilte first")
            return;
        }

        taskDescriptionGenerate(taskTitle, setTaskDescription, setIsLoading);
 

        if(!taskDescription) {
            priviousTitleMatch();

        }
        else {
            
            taskDescriptionGenerate(taskTitle, setTaskDescription, setIsLoading);
        }
 
        setError("");
    }

    const handleChange = e => {
        const { target } = e;

        if (!taskTitle) {
            setTaskDescription("");
            setError("Complete task tilte first")
            return;
        } 
        setError("");

        setTaskDescription(target.value);
    };

    const handleDescriptionClick = () => {
 
        if(!taskDescription) {
            priviousTitleMatch(); 
        } 
        
    }

    return (
        <div>
            {
                error && <p className='text-center mt-2 text-red-600'>{error}</p>
            }

            <div className='mt-3 mb-2 flex flex-col md:flex-row md:items-center  '>

                <p className="text-sm ml-1 ">Task Description <span className='text-red-600'>*</span>  </p>

                <p onClick={handleAI} className={` ${taskTitle != "" ? "cursor-pointer" : "cursor-not-allowed"} text-sm mt-1 md:mt-0 ml-1 md:ml-3 py-1 px-3 rounded-full bg-secondary/[.8] hover:bg-secondary/[.6]  text-white flex justify-center items-center  `}>
                    <AiOutlineReload className='mr-2 ' />
                    Generate with AI
                </p>
                {
                    isLoading && <Loading />
                }

            </div>

            <textarea
                value={taskDescription}
                onChange={handleChange}
                type="text"
                onClick={handleDescriptionClick}
                className={` ${taskTitle ? " " : "cursor-not-allowed"} border-[1px] border-slate-300 w-full focus:outline-0 px-5 py-2 rounded-lg `}
                placeholder="Enter Task Description"
            />

        </div>
    );
};

export default DescriptionSelect;