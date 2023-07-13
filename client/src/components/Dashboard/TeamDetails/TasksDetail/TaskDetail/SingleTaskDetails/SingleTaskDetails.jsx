import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../../../../context/AuthProvider';
import { useQuery } from 'react-query';
import { FaEdit } from 'react-icons/fa';
import ProgressUpdateModal from '../../ProgressUpdateModal/ProgressUpdateModal';
import taskInfoUpdate from '../../../../../../loaders/update/taskInfoUpdate';
import Loading from '../../../../../shared/Loading';
import TaskComments from '../TaskComments/TaskComments';

const SingleTaskDetails = () => {
    const { userName } = useContext(AuthContext);
    const [task, setTask] = useState({});
    const [taskData, setTaskData] = useState([]);
    const [teamleader, setTeamleader] = useState("");
    const [taskTitle, setTaskTitle] = useState("");
    const [progressValue, setProgressValue] = useState();
    const [priorityValue, setPriorityValue] = useState();
    const [taskComments, setTaskComments] = useState([]);
    const [progressModalOpen, setProgressModalOpen] = useState(false);
    const [priorityModalOpen, setPriorityModalOpen] = useState(false);
    const [taskCommentsModalOpen, setTaskCommentsModalOpen] = useState(false);
    const { id, indx } = useParams();

    const { data: taskdetailInfoArr, isLoading, refetch } = useQuery('taskdetailInfo', () =>
        fetch(`http://localhost:5000/api/v1/teams/taskInfo/${id}`, {
            method: 'GET'
        })
            .then(res => res.json())
    );


    useEffect(() => {

        if (taskdetailInfoArr) {

            taskdetailInfoArr?.data?.taskInfo?.forEach((task, index) => {
                if (index == indx - 1) {
                    const taskData = [
                        {
                            name: "Title",
                            value: task?.taskTitle
                        },
                        {
                            name: "Description",
                            value: task?.taskDescription
                        },
                        {
                            name: "Deadline",
                            value: task?.taskDeadline?.slice?.(0, 10)
                        },
                        {
                            name: "Assign Membar",
                            value: task?.userAssign
                        }
                    ]

                    setTaskData(taskData);
                    setTask(task)
                }
            })
            setTeamleader(taskdetailInfoArr?.data?.teamleader); 
        }

    }, [taskdetailInfoArr, indx]);

    useEffect(() => {

        if (task) { 
            setTaskTitle(task?.taskTitle);
            setProgressValue(task?.progress);
            setPriorityValue(task?.taskPriority);
            setTaskComments(task?.taskComments);
        }

    }, [task]);

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleProgress = () => {
        taskInfoUpdate(id, taskTitle, "progress", progressValue, refetch);
    }

    const handlePriority = () => {
        taskInfoUpdate(id, taskTitle, "taskPriority", priorityValue, refetch);
    }
 

    return (
        <div>
            <div className=" flex flex-col justify-center items-center mt-6 ">

                <div className="w-[450px] lg:w-[550px]  px-5   py-6 space-y-2 bg-slate-200  rounded-lg  border-slate-500">
                    <p className="text-xl md:text-3xl  text-center  mb-6 mx-3 text-secondary border-slate-300">
                        <span className=" border-b-2 border-slate-300 pb-2 "> Team Leader : {teamleader}</span>
                    </p>
                    {
                        taskData?.map((task, index) => <div
                            key={index}
                            className="grid grid-cols-8 bg-purple-200 p-3 rounded-lg "
                        >
                            <p className="col-span-2 font-bold  text-blue-500  ">{task?.name}</p>
                            <div className="col-span-6 flex" >
                                <p className="font-bold mx-2">:</p>
                                <p className="text-slate-600 ">{task?.value} </p>
                            </div>
                        </div>)
                    }

                    <div className="grid grid-cols-8 bg-purple-200 p-3 rounded-lg "  >
                        <p className="col-span-2 font-bold  text-blue-500  ">Priority</p>
                        <div className="col-span-6 flex" >
                            <p className="font-bold mx-2">:</p>
                            {
                                userName == teamleader ?

                                    <div onClick={() => setPriorityModalOpen(true)} className="flex  justify-between w-full  mr-6   cursor-pointer" >

                                        <span>{task.taskPriority}  </span>
                                        <FaEdit className="text-secondary text-xl" />
                                    </div>
                                    :
                                    <p  > {task?.taskPriority}  </p>
                            }
                        </div>
                    </div>

                    <div className="grid grid-cols-8 bg-purple-200 p-3 rounded-lg "  >
                        <p className="col-span-2 font-bold  text-blue-500  ">Progress</p>
                        <div className="col-span-6 flex" >
                            <p className="font-bold mx-2">:</p>
                            
                            {
                                userName == task?.userAssign ?

                                    <div onClick={() => setProgressModalOpen(true)} className="flex  justify-between w-full  mr-6   cursor-pointer" >

                                        <span>{task?.progress} % complete</span>
                                        <FaEdit className="text-secondary text-xl" />
                                    </div>
                                    :
                                    <p  > {task?.progress} %  complete</p>
                            }

                        </div>
                    </div>



                </div>

                {
                    priorityModalOpen && (
                        <ProgressUpdateModal
                            closeModal={() => {
                                setPriorityModalOpen(false);
                            }}
                            onSubmit={handlePriority}
                            value={priorityValue}
                            setValue={setPriorityValue}
                            buttonText={"Priority"}
                        />
                    )
                }

                {
                    progressModalOpen && (
                        <ProgressUpdateModal
                            closeModal={() => {
                                setProgressModalOpen(false);
                            }}
                            onSubmit={handleProgress}
                            value={progressValue}
                            setValue={setProgressValue}
                            buttonText={"Progress"}
                        />
                    )
                }

                <TaskComments
                    taskTitle={taskTitle}
                    taskComments={taskComments}
                    taskCommentsModalOpen={taskCommentsModalOpen}
                    setTaskCommentsModalOpen={setTaskCommentsModalOpen} 
                    refetch={refetch}
                />

               
            </div>

        </div>
    );
};

export default SingleTaskDetails;