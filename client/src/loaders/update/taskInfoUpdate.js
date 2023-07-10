import { toast } from "react-toastify";

 
const taskInfoUpdate = (id, taskTitle, property, value, refetch) => {

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
            toast.success(`Update ${property} Sucessfully`, { autoClose: 1000 })
        })
        .catch(error => toast.error(error.message));

    return `Update ${property} Sucessfully`;
};

export default taskInfoUpdate;