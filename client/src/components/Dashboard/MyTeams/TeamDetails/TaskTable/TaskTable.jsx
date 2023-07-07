/* eslint-disable react/prop-types */

import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useParams } from "react-router-dom";
import ProgressModal from "./ProgressModal";
import { toast } from "react-toastify";

const TaskTable = ({ indx, task, userName }) => {



    console.log(task);

    const [modalOpen, setModalOpen] = useState(false);
    const [value, setVAlue] = useState(task?.progress);
    const [progresValue, setProgresValue] = useState(task?.progress);

    const { id } = useParams();

    const handleProgress = () => {

        fetch(`http://localhost:5000/api/v1/teams/progress/${id}`,
            {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        taskTitle: task.taskTitle,
                        progress: value
                    }
                )
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProgresValue(value); 
                toast.success('Progress update successfully', { autoClose: 1000 })
            }) 
            .catch(error => toast.error(error.message));
    }


    return (
        <div className=" table-wrapper pb-8 w-[310px] lg:w-[550px]  m-6">
            
            <table className=" table border-collapse border border-slate-500  bg-slate-100">
                <caption className="caption-top bg-purple-310 py-2 my-2">
                    Task: {indx + 1}
                </caption>



                <tbody>
                    <tr className="border border-slate-500" >
                        <td className="font-bold  w-[30%]   ">Task Title:</td>
                        <td  > {task?.taskTitle} </td>
                    </tr>

                    <tr className="border border-slate-500" >
                        <td className="font-bold  w-[30%]  ">Task Description:</td>
                        <td  > {task?.taskDescription} </td>
                    </tr>

                    <tr className="border border-slate-500" >
                        <td className="font-bold  w-[30%]  ">Task Priority:</td>
                        <td  > {task?.taskPriority} </td>
                    </tr>

                    {
                        (task?.taskDeadline) ?
                            <tr className="border border-slate-500" >
                                <td className="font-bold  w-[30%]  ">Task Deadline:</td>
                                <td  > {task?.taskDeadline?.slice?.(0, 10)} </td>
                            </tr>
                            :
                            <></>


                    }

                    <tr className="border border-slate-500" >
                        <td className="font-bold  text-secondary w-[30%]  ">Assign Membar:</td>
                        <td  > {task?.userAssign} </td>
                    </tr>

                    <tr className="border border-slate-500 " >
                        <td className="font-bold text-secondary  w-[30%]  ">Task Progress:</td>
                        {
                            userName == task?.userAssign ?

                                <td onClick={() => setModalOpen(true)} className="flex  justify-between border-t-0 mr-10 cursor-pointer" >

                                    <span>{progresValue} % complete</span>
                                    <FaEdit className="text-secondary text-xl"/>
                                </td>


                                :
                                <td  > {task?.progress} %  complete</td>

                        }

                    </tr>
                </tbody>

            </table>


            {modalOpen && (
                <ProgressModal
                    closeModal={() => {
                        setModalOpen(false);
                    }}
                    onSubmit={handleProgress}
                    value={value}
                    setVAlue={setVAlue}
                />
            )}
        </div>
    );
};

export default TaskTable;