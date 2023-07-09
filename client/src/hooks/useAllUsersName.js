import  { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const useAllUsersName = () => {

    const [allUsersName, setAllUsersName] = useState([]);
    const [allUsersNameLoading, setAllUsersNameLoading] = useState(false);
 
    useEffect(() => {
        setAllUsersNameLoading(true);

        fetch('http://localhost:5000/api/v1/users/name')
            .then(res => res.json())
            .then(res => {
                setAllUsersName(res.data);
                setAllUsersNameLoading(false);
            })
            .catch( error => {
                toast.error(error.message);
                setAllUsersNameLoading(false); 
            })

    }, [])
    
    return [allUsersName, allUsersNameLoading];
};

export default useAllUsersName;