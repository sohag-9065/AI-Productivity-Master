/* eslint-disable react/prop-types */

import { AiTwotoneFileAdd } from 'react-icons/ai';
import AddTaskModal from './AddTaskModal/AddTaskModal';

const AddTask = ({ modalOpen, setModalOpen, handleSubmit }) => {
    return (
        <div>
            <div className="flex justify-center mt-4">
                <p onClick={() => setModalOpen(true)} className=" flex items-center gap-4 transition  duration-300  hover:delay-100 cursor-pointer bg-secondary text-white  hover:bg-secondary/[.8]    px-5 py-3 rounded-full text-center  mt-4 ">
                    Add New Task
                    <AiTwotoneFileAdd className='text-2xl' />
                </p>
            </div>

            {modalOpen && (
                <AddTaskModal
                    closeModal={() => {
                        setModalOpen(false);
                    }}
                    onSubmit={handleSubmit}
                />
            )}

        </div>
    );
};

export default AddTask;