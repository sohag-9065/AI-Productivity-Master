import { toast } from "react-toastify";

const storeUserInformation = userInfo => {
 
    fetch(`https://blue-sparkling-duck.cyclic.app/api/v1/users`, {
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