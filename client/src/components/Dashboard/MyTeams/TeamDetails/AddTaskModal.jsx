/* eslint-disable react/prop-types */

import { RxCross2 } from 'react-icons/rx';
import CategorySelect from '../../../TeamCreate/CategorySelect';
import { useState } from 'react';
import PrioritySet from './PrioritySet';
import MembarAssign from './MembarAssign';
import DescriptionSelect from './DescriptionSelect';
import TitleSelect from './TitleSelect';
import Deadline from '../../../TeamCreate/Deadline';

const AddTaskModal = ({ closeModal, onSubmit }) => {
    const [error, setError] = useState("");
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskPriority, setTaskPriority] = useState(1);
    const [taskDeadline, setTaskDeadline] = useState(new Date());
    const [userAssign, setUserAssign] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        if (taskTitle && userAssign) {
            const taskInfo = {
                taskTitle,
                taskDescription,
                taskPriority,
                taskDeadline,
                userAssign,
                progress: "10"
            }
 
            setError("");
            onSubmit(taskInfo);
            closeModal();
        }
        else {
            setError("Complete te form");
        }

        setTimeout(() => {
            setError("")
        }, 1500);

    };
    return (
        <div className=" modal-container  overflow-y-auto "  >
            <div className="moda absolute  top-8  w-[350px] sm:w-[500px] bg-gradient-to-t from-[#E6FFFF] via-white to-[#E6FFFF]">
                <RxCross2 className="absolute top-2 right-3 text-xl font-bold cursor-pointer " onClick={closeModal} />
                <form>

                    <CategorySelect />

                    <TitleSelect catagorydata={"catagorydata"} value={taskTitle} setValue={setTaskTitle} />

                    <DescriptionSelect taskTitle={taskTitle} value={taskDescription} setValue={setTaskDescription} />

                    <PrioritySet taskTitle={taskTitle} taskDescription={taskDescription} taskPriority={taskPriority} setTaskPriority={setTaskPriority} />

                    <Deadline taskDeadline={taskDeadline} setTaskDeadline={setTaskDeadline} />

                    <MembarAssign taskTitle={taskTitle} taskDescription={taskDescription} userAssign={userAssign} setUserAssign={setUserAssign} />

                    {
                        error && <p className='text-center mt-2 text-red-600'>{error}</p>
                    }
                    <button onClick={handleSubmit} type="submit" className={` ${(taskTitle != "" && userAssign != "") ? " cursor-pointer" : " cursor-not-allowed "}  w-full   mt-4 bg-secondary/[.9] hover:bg-secondary/[.7]   text-white px-5  font-medium   py-3 rounded-full `} >
                        Create Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTaskModal;