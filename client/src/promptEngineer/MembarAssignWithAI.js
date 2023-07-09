import { toast } from "react-toastify";
import openai from "../openai/openai.config";

const MembarAssignWithAI = async(taskTitle, taskDescription, userInfoString, allUsers, setUserAssign, setIsLoading) => {

    setIsLoading(true);

        let promt = `I created a task. Task title is ${taskTitle} . And 'Task description is ${taskDescription}. ${userInfoString}. who is the best for this task. just give the employee name. don't give extra word. you don't give me a extra charecter.`;

        try {
            const completion = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: promt,
                max_tokens: 25,
                temperature: 1,
            });

            let result = completion?.data?.choices[0]?.text.split('\n').join('');
            result = result.split('.').join('');
            if (result) {

                allUsers?.forEach(user => {
                    if (result.includes(user)) {

                        setUserAssign(user);
                    }
                })

                setIsLoading(false); 
            }

        } catch (error) {
            setIsLoading(false);
            toast.error('Error:', error.message);
        }

   return "Membar Assign Sucessfully";
};

export default MembarAssignWithAI;