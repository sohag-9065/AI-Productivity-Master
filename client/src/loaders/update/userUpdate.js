import { toast } from "react-toastify";

 
const userUpdate = (userInfo, allSkills, refetch) => {

    fetch(`http://localhost:5000/api/v1/users`,
            {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ 
                    email: userInfo?.email,
                    skills: allSkills
                })
            })
            .then(res => res.json())
            .then(data => {  
                toast.success('Skill updated successfully', { autoClose: 1000 })
                console.log(data); 
                refetch();

            })
            .catch(error => toast.error(error.message));

return "Update User Sucessfully";
};

export default userUpdate;