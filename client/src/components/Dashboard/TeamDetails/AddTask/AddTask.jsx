/* eslint-disable react/prop-types */

import { AiTwotoneFileAdd } from 'react-icons/ai';
import AddTaskModal from './AddTaskModal/AddTaskModal';
import { useContext } from 'react';
import { SingleTaskContext } from '../../../../context/SingleTaskProvider';

const AddTask = () => {

    const {
        modalOpen,
        setModalOpen 
    } = useContext(SingleTaskContext);


    return (
        <div>
            <div className="flex justify-center mt-4">
                <p onClick={() => setModalOpen(true)} className=" flex items-center gap-4 transition  duration-300  hover:delay-100 cursor-pointer bg-secondary text-white  hover:bg-secondary/[.8]    px-5 py-3 rounded-full text-center  mt-4 ">
                    Add New Task
                    <AiTwotoneFileAdd className='text-2xl' />
                </p>
            </div>

            {
                modalOpen && <AddTaskModal />
            }

        </div>
    );
};

export default AddTask;