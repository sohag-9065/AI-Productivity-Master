/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { AuthContext } from '../../../../../../context/AuthProvider';
import { useParams } from 'react-router-dom';
import TaskCommentsTable from './TaskCommentsTable/TaskCommentsTable';
import { BiMessageRoundedAdd } from 'react-icons/bi';  
import CommentsModal from '../../../Comments/CommentsModal';
import taskInfoUpdate from '../../../../../../loaders/update/taskInfoUpdate';

const TaskComments = (
    {
        taskTitle,
        taskComments, 
        taskCommentsModalOpen,
        setTaskCommentsModalOpen,
        refetch,

    }) => {

    const { id } = useParams();
    const { userName } = useContext(AuthContext);

    const [comment, setComment] = useState("");

    const handleTaskComments = () => {

        const userComment = {
            taskComment: comment,
            user: userName
        }

        taskComments.push(userComment);

        console.log(taskComments)


        taskInfoUpdate(id, taskTitle, "taskComments", taskComments, refetch);
    }

    return (
        <div className='mt-8'>
            <div className="w-[450px] lg:w-[550px]  px-5   py-6 space-y-2 bg-slate-200  rounded-lg  border-slate-500 ">

                {
                    taskComments?.length > 0 ?

                        <div>

                            <p className="text-xl md:text-3xl  text-center  mb-6 mx-3 text-secondary border-slate-300">
                                <span className=" border-b-2 border-slate-300 pb-2"> All Commnets  ({taskComments.length})</span>
                            </p>

                            <TaskCommentsTable comments={taskComments}   />


                        </div >
                        :
                        <p className="text-2xl text-center md:text-3xl text-blue-400">No comment has been added yet!</p>
                }

                <div className="flex justify-center  ">
                    <p onClick={() => setTaskCommentsModalOpen(true)} className=" flex items-center gap-4 transition  duration-300  hover:delay-100 cursor-pointer bg-secondary text-white  hover:bg-secondary/[.8]    px-5 py-3 rounded-full text-center  mt-4 ">
                        Add New Comment
                        <BiMessageRoundedAdd className="text-white text-2xl" />
                    </p>
                </div>

                {
                    taskCommentsModalOpen && (
                        <CommentsModal
                            closeModal={() => {
                                setTaskCommentsModalOpen(false);
                            }}
                            comment={comment}
                            setComment={setComment}
                            onSubmit={handleTaskComments}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default TaskComments;