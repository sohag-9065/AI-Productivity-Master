import { toast } from "react-toastify";

const storeUserInformation = userInfo => {
 
    fetch(`https://api-ai-one.vercel.app/api/v1/users`, {
        method: "POST",
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(userInfo)
      })
        .then( () => {} )
        .then( () => {})
        .catch(error => toast.error(error.message));
    

    return "Store Sucessfully";
}

export default storeUserInformation;