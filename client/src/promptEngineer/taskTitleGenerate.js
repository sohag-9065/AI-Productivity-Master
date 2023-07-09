import { toast } from "react-toastify";
import openai from "../openai/openai.config";

const taskTitleGenerate = async (catagorydata, setTaskTitle, setIsLoading) => {


    let prompt = "I want to create a project. Give me a project title. it's will be one sentance.";
    
    if (catagorydata) {
        prompt = `I want to create a project. Give me a project title of this ${catagorydata}. it's will be one sentance.`
    }

    setIsLoading(true);

    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 200,
            temperature: 1,
        });

        const result = completion?.data?.choices[0]?.text.split('\n').join('');

        if (result[0] == '.') result.slice(1);

        if (result) {
            setTaskTitle(result);
            setIsLoading(false);
        }

    } catch (error) {
        setIsLoading(false);
        toast.error('Error:', error.message);
    }
 
    return "Task Title Generate Sucessfully";
};

export default taskTitleGenerate;