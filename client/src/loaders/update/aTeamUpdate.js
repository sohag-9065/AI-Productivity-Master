 import { toast } from "react-toastify"; 
 
const aTeamUpdate = (id, property ,task, refetch, message) => {

    const query = {

    }

    console.log("object")
    console.log(query)

    query[property] = task;

    console.log("object")
    console.log(query)
  
  
    fetch(`https://api-ai-one.vercel.app/api/v1/teams/${id}`,
            {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(query)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data); 
                refetch();
                toast.success(`${message}`, { autoClose: 1000 })
            })
            .catch(error => toast.error(error.message));

        return `${message}`;
};

export default aTeamUpdate;