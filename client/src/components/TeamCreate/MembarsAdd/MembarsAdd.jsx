/* eslint-disable react/prop-types */

import {  useState } from 'react';
import MembarsAddTable from './MembarsAddTable';
import MembarAddModal from './MembarAddModal';

const MembarsAdd = ({ userNames, setUserNames }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleDeleteUser = (targetIndex) => {
        setUserNames(userNames.filter((_, idx) => idx !== targetIndex));
    };

    const handleSubmit = newRow => setUserNames([...userNames, newRow]);


    return (
        <div>
            <div className='mt-6 mb-2 flex flex-col md:flex-row md:items-center  '>
                <p className="text-sm ml-1 ">Add Team Membars: <span className='text-red-600'>*</span>  </p>
            </div>

            {
                userNames.length != 0 ?
                    <MembarsAddTable userNames={userNames} deleteRow={handleDeleteUser} />
                    :
                    <> </>
            }

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