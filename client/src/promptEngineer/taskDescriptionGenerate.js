import { toast } from "react-toastify";
import openai from "../openai/openai.config";

const taskDescriptionGenerate = async(taskTitle, setTaskDescription, setIsLoading ) => {

    setIsLoading(true);

    let prompt = `I created a task. This is the '${taskTitle}' task title. Give me a short description about the task `;

    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt,
            max_tokens: 1000,
            temperature: 1,
        });

        const result = completion?.data?.choices[0]?.text.split('\n').join('');
        if (result[0] == '.') result.slice(1);
        if (result) {
            setIsLoading(false);
            setTaskDescription(result); 
        }

    } catch (error) {
        setIsLoading(false);
        toast.error('Error:', error.message);
    }
    
    return "Task Description Generate Sucessfully";
};

export default taskDescriptionGenerate;