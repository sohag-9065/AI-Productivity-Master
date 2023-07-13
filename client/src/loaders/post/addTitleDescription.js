import { toast } from "react-toastify";


const addTitleDescription = (data) => {

    console.log(data)

    fetch(`https://blue-sparkling-duck.cyclic.app/api/v1/titlesDescriptions`, {
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