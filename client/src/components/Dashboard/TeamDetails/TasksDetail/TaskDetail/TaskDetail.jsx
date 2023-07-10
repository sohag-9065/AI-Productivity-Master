/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { FaArrowRight, FaEdit } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import ProgressUpdateModal from "../ProgressUpdateModal/ProgressUpdateModal";
import progressUpdate from "../../../../../loaders/update/progressUpdate";
import { AuthContext } from "../../../../../context/AuthProvider";


const TaskDetail = ({ indx, task, teamleader, refetch }) => {
 
 
    const { id } = useParams();

    const taskData = [
        {
            name: "Task Title",
            value: `${task?.taskTitle?.slice(0,60)}...`
        },
        {
            name: "Task Priority",
            value: task?.taskPriority
        },
        {
            name: "Task Deadline",
            value: task?.taskDeadline?.slice?.(0, 10)
        },
        {
            name: "Task Assign",
            value: task?.userAssign
        },
        {
            name: "Task Progress",
            value: `${task?.progress} %`
        },

    ]
 
    return (
        <div className="relative m-6 p-4 pb-6 py-4 space-y-2 bg-slate-200  rounded-lg  border-slate-500">
            <p className="text-center text-blue-700  text-xl pb-2"> Team Leader : {teamleader}</p>
            {
                taskData?.map((task, index) => <div
                    key={index}
                    className="grid grid-cols-7 bg-purple-200 p-2 rounded-lg "
                >
                    <p className="col-span-2 font-bold  text-blue-500  ">{task?.name}</p>
                    <div className="col-span-5 flex" >
                        <p className="font-bold mx-2">:</p>
                        <p className=" ">{task?.value} </p>
                    </div>
                </div>)
            }

            <p className='py-3'> </p>
            <Link to={`${indx+1}`}  className='flex justify-center items-center gap-3 absolute  bottom-0 text-center left-[50%]  -translate-x-[50%] cursor-pointer  rounded-b-lg  py-2 bg-secondary text-white w-full '>
                <span>See Details</span>
                <FaArrowRight />
            </Link>
        </div>
    );
};
export default TaskDetail;
