/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'; 
import { toast } from 'react-toastify'; 

// eslint-disable-next-line no-unused-vars
const useUserInfo = (userName) => {
 
    const [usersInfo, setUserInfo] = useState([]);
    const [userSkills, setUserSkills] = useState([]);
    const [usersInfoLoading, setUserInfoLoading] = useState(false);

    useEffect(() => {
        setUserInfoLoading(true); 
        
        fetch(`https://blue-sparkling-duck.cyclic.app/api/v1/users?name=${userName}`)
            .then(res => res.json())
            .then(res => {


                setUserInfo(res.data[0]);
                setUserSkills(res.data[0]?.skills)
                setUserInfoLoading(false);
            })
            .catch(error => {
                toast.error(error.message);
                setUserInfoLoading(false);
            })

    }, [userName])


    return [usersInfo, userSkills, usersInfoLoading];
};

export default useUserInfo;