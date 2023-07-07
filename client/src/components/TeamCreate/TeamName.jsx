/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { AiOutlineReload } from "react-icons/ai";
import { Configuration, OpenAIApi } from 'openai';
import Loading from "../shared/Loading";
import { useState } from "react";

const TeamName = ({ teamName, setTeamName }) => {

    const [isLoading, setIsLoading] = useState(false);

    const configuration = new Configuration({
        apiKey: import.meta.env.VITE_CHAT_GPT_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const handleSuggestion = async () => { 
        setIsLoading(true);

        try {
            const completion = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: `I want to create a team. Just give me a team name. don't give me a special charecteror extra word`,
                max_tokens: 40,
                temperature: 1,
            });

            let result = completion?.data?.choices[0]?.text.split('\n').join('');
            result = result.split('.').join(''); 
            if(result) {
                setIsLoading(false);
                setTeamName(result);
                console.log(completion?.data?.choices[0]?.text.split('\n').join(''));
            }

        } catch (error) {
            setIsLoading(false);
            console.error('Error:', error.message); 
        }
    }

    const handleNameChange = e => {
        e.preventDefault();
        setTeamName(e.target.value);
    };

    return (
        <div>

            <div className='mt-6 mb-2 flex flex-col md:flex-row md:items-center  '>
                <p className="text-sm ml-1 ">Team Name: <span className='text-red-600'>*</span>   </p>

                <p onClick={handleSuggestion} className="mr-4 text-sm mt-1 md:mt-0 ml-1 md:ml-3 py-1 px-3 rounded-full  bg-secondary/[.6] hover:bg-secondary/[.8] text-white flex justify-center items-center cursor-pointer">
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