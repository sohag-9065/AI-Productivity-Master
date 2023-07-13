import { toast } from "react-toastify";


const userUpdate = (email, allSkills, refetch) => {

    fetch(`https://blue-sparkling-duck.cyclic.app/api/v1/users`,
        {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                email,
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