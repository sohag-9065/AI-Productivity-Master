/* eslint-disable react/prop-types */
import { useContext } from 'react';
import TaskDetail from './TaskDetail/TaskDetail';
import { SingleTaskContext } from '../../../../context/SingleTaskProvider';

const TasksDetail = () => {

    const { taskInfo, teamleader, refetch } = useContext(SingleTaskContext);

    return (
        <div>
            <div className="flex justify-center mt-6  ">
                {
                    taskInfo?.length > 0 ?

                        <div className=' '>

                            <p className="text-2xl md:text-3xl  text-center  mb-4 mx-3 text-secondary border-slate-300">
                                <span className=" border-b-2 border-slate-300 pb-2"> All Tasks Information ({taskInfo.length})</span>
                            </p>

                            <div className={`grid grid-cols-1   placeholder: ${taskInfo?.length > 1 ? " lg:grid-cols-2" : " "}`}>
                                {
                                    taskInfo?.map((task, indx) => <TaskDetail
                                        key={indx}
                                        indx={indx}
                                        task={task}
                                        teamleader={teamleader}
                                        refetch={refetch}

                                    />)
                                }
                            </div>

                        </div >

                        // <div className=' '>

                        //     <p className="text-2xl md:text-3xl  text-center  mb-4 mx-3 text-secondary border-slate-300">
                        //         <span className=" border-b-2 border-slate-300 pb-2"> All Tasks Information ({taskInfo.length})</span>
                        //     </p>
                        //     <div className="max-h-[530px] overflow-y-auto overflow-x-hidden  shadow-lg bg-slate-200 mt-8 rounded-lg">
                        //         {
                        //             taskInfo?.map((task, indx) => <TaskDetail
                        //                 key={indx}
                        //                 indx={indx}
                        //                 task={task} 
                        //                 refetch={refetch}

                        //             />)
                        //         }
                        //     </div>

                        // </div >
                        :
                        <p className="text-2xl md:text-3xl text-blue-400">No work has been created yet!</p>
                }
            </div>

        </div>
    );
};

export default TasksDetail;