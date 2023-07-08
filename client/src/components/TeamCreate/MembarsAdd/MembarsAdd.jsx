/* eslint-disable react/prop-types */

import {  useState } from 'react'; 

import useAllUsersInfo from '../../../hooks/useAllUsersInfo';   
import MembarAddModal from './MembarAddModal/MembarAddModal';

const MembarsAdd =   ({ userNames, displayName, setUserNames, userInfo, setUserInfo }) => {
    const [modalOpen, setModalOpen] = useState(false); 
    const [allUsersInfo ] = useAllUsersInfo();
 
 
 
    const handleSubmit = newRow => {
        setUserNames([...userNames, newRow])
        
        allUsersInfo?.forEach(userdetail => {

            let status = 'pending';

            if (displayName == newRow) status = 'accept';

            if (userdetail.name == newRow) {

                setUserInfo([
                    ...userInfo,
                    {
                        user: newRow,
                        skills: userdetail.skills,
                        status
                    }
                ])
            }
        })
    }; 


    return (
        <div>
  
            <p onClick={() => setModalOpen(true)} className=" text-center mt-6 ">

                <span className="bg-secondary/[.9] hover:bg-secondary/[.7] cursor-pointer  text-white px-5  font-medium   py-3 rounded-full  ">Add   Membar</span>
            </p>

            {modalOpen && (
                <MembarAddModal
                    closeModal={() => {
                        setModalOpen(false);
                    }}
                    userNames={userNames}
                    onSubmit={handleSubmit}
                />
            )}
        </div>
    );
};

export default MembarsAdd;