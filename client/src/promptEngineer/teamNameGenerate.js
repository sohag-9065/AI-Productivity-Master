import { toast } from "react-toastify";
import openai from "../openai/openai.config";


const teamNameGenerate = async (setTeamName, setIsLoading ) => {
    
    setIsLoading(true);

    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `I want to create a team. Just give me a team name. don't give me a special charecteror or extra word`,
            max_tokens: 40,
            temperature: 1,
        });

        let result = completion?.data?.choices[0]?.text.split('\n').join('');
        result = result.split('.').join(''); 
        
        setTeamName(result); 
        setIsLoading(false);
        
    } catch (error) {
        setIsLoading(false);
        toast.error('Error:', error.message);
    }
 
    return "Team Name Generate Sucessfully";
};

export default teamNameGenerate;