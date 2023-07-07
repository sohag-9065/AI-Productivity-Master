/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { Configuration, OpenAIApi } from 'openai';
import Loading from "../../../shared/Loading";

const PrioritySet = ({ taskTitle, taskDescription, taskPriority, setTaskPriority }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const configuration = new Configuration({
        apiKey: import.meta.env.VITE_CHAT_GPT_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const handleAI = async () => {
        setIsLoading(true);

        let promt = `I created a task. This is the '${taskTitle}' task title and this is the ${taskDescription} task description . Give me a task priority level. it will be between 1 to 5 intiger value . just give me a intiger number. don't provide any word or new line`;


        try {
            const completion = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: promt,
                max_tokens: 3,
                temperature: 1,
            });

            const result = completion?.data?.choices[0]?.text;

            if (result) {

                let level = result[result.length - 1];

                if (level >= '1' && level <= 5) {
                    console.log(level)
                    setIsLoading(false);
                    setTaskPriority(level);
                    setErrorMessage("");
                }
                else {
                    console.log("recall: " + result)
                    handleAI();
                }

            }

        } catch (error) {
            setIsLoading(false);
            console.error('Error:', error.message);
        }
    }

    const handPriorityChange = event => {

        if(event?.target?.value == "" ) {
            setTaskPriority("");
            setErrorMessage("Set priority between 1 to 5  ");
            return;
        }

        const priority = parseInt(event?.target?.value);

        if (!taskDescription) {
            setErrorMessage(" Please complete task deskcription  ");
            setTaskPriority(taskPriority);
            return;

        }

        console.log(priority)

        setTaskPriority(priority);
        if (priority > 5) {
            setTaskPriority(5);
            setErrorMessage(`You maximum priority level 5.`);
        }
        else if (priority < 1) {
            setTaskPriority(1);
            setErrorMessage(`You minimum priority level 1.`)
        }
        else {
            setErrorMessage('')
        }
    }
    return (
        <div>
            <div className='mt-3 mb-2 flex flex-col md:flex-row md:items-center  '>
                <p className="text-sm ml-1 ">Task Priority <span className='text-red-600'>*</span>  </p>

                <p onClick={handleAI} className={`${taskDescription ? " " : " cursor-not-allowed "} text-sm mt-1 md:mt-0 ml-1 md:ml-3 py-1 px-3 rounded-full bg-secondary/[.8] hover:bg-secondary/[.6]  text-white flex justify-center items-center cursor-pointer`}>
                    <AiOutlineReload className='mr-2' />
                    Generate with AI
                </p>
                {
                    isLoading && <Loading />
                }

            </div>
            <input
                value={taskPriority}
                onChange={handPriorityChange}
                type="number"
                name='order_quantity'
                className={`${taskDescription ? " " : " cursor-not-allowed "} border-[1px] border-slate-300 w-full focus:outline-0 px-5 py-2 rounded-full`}
            ></input>

            <p className='text-red-500 font-medium '>{errorMessage}</p>
        </div>
    );
};

export default PrioritySet;