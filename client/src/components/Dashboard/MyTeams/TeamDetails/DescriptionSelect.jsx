/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { AiOutlineReload } from "react-icons/ai";
import { Configuration, OpenAIApi } from 'openai';
import Loading from '../../../shared/Loading';

const DescriptionSelect = ({ taskTitle, value, setValue }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect( () => {
        if (taskTitle) {
            setError("")
        }

    }, [taskTitle])

    const configuration = new Configuration({
        apiKey: import.meta.env.VITE_CHAT_GPT_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const handleAI = async () => {
        if (!taskTitle) {
            setError("Complete task tilte first")
            return;
        }
        setError("")
        setIsLoading(true);

        let promt = `I created a task. This is the '${taskTitle}' task title. Give me a short description about the task `;

        try {
            const completion = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: promt,
                max_tokens: 1000,
                temperature: 1,
            });

            const result = completion?.data?.choices[0]?.text.split('\n').join('');
            if (result[0] == '.') result.slice(1);
            if (result) {
                setIsLoading(false);
                setValue(result);
                // console.log(completion?.data?.choices[0]?.text.split('\n').join(''));
            }

        } catch (error) {
            setIsLoading(false);
            console.error('Error:', error.message);
        }
    }



    const handleChange = e => {
        const { target } = e;
         
        if (!taskTitle) {
            setValue("");
            setError("Complete task tilte first")
            return;
        }
        setError("")
        setValue(target.value);
    };



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