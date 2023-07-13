import { toast } from "react-toastify";

const progressUpdate = (id, taskTitle, property, value, refetch) => {

    let query = { taskTitle };
 

    if( property == "progress") {
         
        query["progress"] = value;
    }

    if( property == "taskPriority") { 
        query["taskPriority"] = value;
    }

    fetch(`http://localhost:5000/api/v1/teams/taskInfo/${id}`,
        {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(query)
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