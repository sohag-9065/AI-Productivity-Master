/* eslint-disable react/prop-types */
 
import { useEffect, useState } from 'react';
import MembarsAddTable from './MembarsAddTable';
import MembarAddModal from './MembarAddModal';

const MembarsAdd = ({ setAllMembars }) => {
    const [userNames, setUserNames] = useState([
        {
            userName: "Md. Sohag Hossain", 
        },
        {
            userName: "Nahid hasan", 
        },
        {
            userName: "Shanto Saha", 
        },
    ]);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (userNames) setAllMembars([...userNames]);
    }, [userNames])
 
    const handleDeleteUser = (targetIndex) => {
        setUserNames(userNames.filter((_, idx) => idx !== targetIndex));
    };

    const handleSubmit = (newRow) => {
        setUserNames([...userNames, newRow])
    };

    return (
        <div>
            <div className='mt-6 mb-2 flex flex-col md:flex-row md:items-center  '>
                <p className="text-sm ml-1 ">Add Team Membars <span className='text-red-600'>*</span> ( Suggestion From AI). </p>
            </div>
            <MembarsAddTable userNames={userNames} deleteRow={handleDeleteUser}   />

            <p onClick={() => setModalOpen(true)} className=" text-center mt-4 ">

                <span className="bg-secondary/[.9] hover:bg-secondary/[.7] cursor-pointer  text-white px-5  font-medium   py-2 rounded-full  ">Add New Membar</span>
            </p>

            {modalOpen && (
                <MembarAddModal
                    closeModal={() => {
                        setModalOpen(false); 
                    }}
                    onSubmit={handleSubmit} 
                />
            )}
        </div>
    );
};

export default MembarsAdd;