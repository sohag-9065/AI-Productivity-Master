/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';
import TaskDetail from './TaskDetail/TaskDetail';
import AddTask from '../AddTask/AddTask';

const TasksDetail = ({ teamleader, taskInfo, modalOpen, setModalOpen, handleSubmit }) => {
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
                                    taskInfo?.map((task, indx) => <TaskDetail
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
                teamleader == userName && (
                    <AddTask
                        modalOpen={modalOpen}
                        setModalOpen={setModalOpen}
                        handleSubmit={handleSubmit}
                    />
                )


            }


        </div>
    );
};

export default TasksDetail;