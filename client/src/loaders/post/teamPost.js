import { toast } from "react-toastify";

 
const teamPost = (team) => {
    
    fetch(`https://blue-sparkling-duck.cyclic.app/api/v1/teams`, {
            method: "Post",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(team)
        })
            .then( () => {})
            .then(() => toast.success('Team Created Successfully', { autoClose: 1000 }))
            .catch(error => toast.error(error.message));
    
    return "Store Sucessfully";
};

export default teamPost;