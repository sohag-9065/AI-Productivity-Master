import { toast } from "react-toastify";
import openai from "../openai/openai.config"; 


const taskPrirityGenerate = async(taskTitle, taskDescription,  setTaskPriority, setIsLoading, handleAI) => {
    
    
    let promt = `I created a task. This is the '${taskTitle}' task title and this is the ${taskDescription} task description . Give me a task priority level. it will be between 1 to 9 intiger value . just give me a intiger number. don't provide any word or new line`;
    
    setIsLoading(true);


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
            }
            else {
                console.log("recall: " + result)
                handleAI();
            }

        }

    } catch (error) {
        setIsLoading(false);
        toast.error('Error:', error.message);
    }
    
    return "Task Piority Generate Sucessfully";
};

export default taskPrirityGenerate;