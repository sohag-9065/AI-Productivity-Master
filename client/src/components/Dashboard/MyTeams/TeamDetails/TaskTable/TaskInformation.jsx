/* eslint-disable react/prop-types */
import { AiTwotoneFileAdd } from 'react-icons/ai';
import TaskTable from './TaskTable';
import AddTaskModal from '../AddTaskModal';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../context/AuthProvider';

const TaskInformation = ({ teamleader,   taskInfo, modalOpen, setModalOpen, handleSubmit }) => {
    const { user } = useContext(AuthContext);
    const [userName, setUserName] = useState(""); 

    useEffect(() => {
        if (user?.displayName) {
            const name = user?.displayName;
            setUserName(name);  
        }

    }, [user]);
    return (
        <div>
            <div className="flex justify-center mt-6  ">
                {
                    taskInfo.length > 0 ?

                        <div className=' '>

                            <p className="text-2xl md:text-3xl  text-center  mb-4 mx-3 text-secondary border-slate-300">
                                <span className=" border-b-2 border-slate-300 pb-2"> All Tasks Information ({taskInfo.length})</span>
                            </p>
                            <div className="max-h-[530px] overflow-y-auto overflow-x-hidden  shadow-lg bg-slate-200 mt-8 rounded-lg">
                                {
                                    taskInfo?.map((task, indx) => <TaskTable
                                        key={indx}
                                        indx={indx}
                                        task={task}

                                        userName={userName}

                                    />)
                                }
                            </div>

                        </div >
                        :
                        <p className="text-2xl md:text-3xl text-blue-400">No work has been created yet!</p>
                }
            </div>

            {
                teamleader == userName  && 
                <div className="flex justify-center mt-4">
                    <p onClick={() => setModalOpen(true)} className=" flex items-center gap-4 transition  duration-300  hover:delay-100 cursor-pointer bg-secondary text-white  hover:bg-secondary/[.8]    px-5 py-3 rounded-full text-center  mt-4 ">
                        Add New Task
                        <AiTwotoneFileAdd className='text-2xl' />
                    </p>
                </div>
            }

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

export default TaskInformation;