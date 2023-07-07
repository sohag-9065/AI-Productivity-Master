/* eslint-disable react/prop-types */
  
import { AiOutlineReload } from "react-icons/ai";
import { Configuration, OpenAIApi } from 'openai';
import { useState } from "react";
import Loading from "../../../shared/Loading";

 
const TitleSelect = ({ catagorydata, value, setValue }) => {
    const [isLoading, setIsLoading] = useState(false);

    const configuration = new Configuration({
        apiKey: import.meta.env.VITE_CHAT_GPT_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const handleAI = async() => {
        setIsLoading(true);

        let promt = "I want to create a project. Give me a project title. it's will be one sentance.";
        if(catagorydata) {
            promt = `I want to create a project. Give me a project title of this ${catagorydata}. it's will be one sentance.`
        }

        try {
            const completion = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: promt,
                max_tokens: 200,
                temperature: 1,
            });

            const result = completion?.data?.choices[0]?.text.split('\n').join('');
            if(result[0] == '.') result.slice(1);
            if(result) {
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
        setValue(target.value);
    };



    return (
        <div>

            <div className='mt-3 mb-2 flex flex-col md:flex-row md:items-center  '>
                <p className="text-sm ml-1 ">Task Title <span className='text-red-600'>*</span>  </p>

                <p onClick={handleAI} className={`  cursor-pointer  text-sm mt-1 md:mt-0 ml-1 md:ml-3 py-1 px-3 rounded-full bg-secondary/[.8] hover:bg-secondary/[.6]  text-white flex justify-center items-center  `}>
                    <AiOutlineReload className='mr-2 ' />
                    Generate with AI 
                </p>

                {
                    isLoading && <Loading />
                }

            </div>
            <input
                value={value}
                onChange={handleChange}
                type="text"
                className={` border-[1px] border-slate-300 w-full focus:outline-0 px-5 py-2 rounded-full `}
                placeholder="Enter task title Hei"
            />


        </div>
    );
};

export default TitleSelect;