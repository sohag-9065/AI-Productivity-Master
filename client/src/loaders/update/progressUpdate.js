import { toast } from "react-toastify";

const progressUpdate = (id, taskTitle, progress, refetch) => {

    fetch(`http://localhost:5000/api/v1/teams/progress/${id}`,
        {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(
                {
                    taskTitle,
                    progress
                }
            )
        })
        .then(res => res.json())
        .then(() => {
            refetch();
            toast.success('Progress update successfully', { autoClose: 1000 })
        })
        .catch(error => toast.error(error.message));

    return "Update Progress Sucessfully";
};

export default progressUpdate;