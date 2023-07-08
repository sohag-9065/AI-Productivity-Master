/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'; 
import { toast } from 'react-toastify'; 

const useAllUsersInfo = () => {

 

    const [allUsersInfo, setAllUsersInfo] = useState([]);
    const [allUsersInfoLoading, setAllUsersInfoLoading] = useState(false);

    useEffect(() => {
        setAllUsersInfoLoading(true); 
        
        fetch('http://localhost:5000/api/v1/users')
            .then(res => res.json())
            .then(res => {


                setAllUsersInfo(res.data);
                setAllUsersInfoLoading(false);
            })
            .catch(error => {
                toast.error(error.message);
                setAllUsersInfoLoading(false);
            })

    }, [])


    return [allUsersInfo, allUsersInfoLoading];
};

export default useAllUsersInfo;