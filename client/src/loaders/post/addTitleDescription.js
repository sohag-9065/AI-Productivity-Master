import { toast } from "react-toastify";


const addTitleDescription = (data) => {

    console.log(data)

    fetch(`http://localhost:5000/api/v1/titlesDescriptions`, {
        method: "Post",
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(() => { })
        .then(() => { })
        .catch(error => toast.error(error.message));

    return "Store Sucessfully";
};

export default addTitleDescription;