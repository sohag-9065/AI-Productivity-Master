/* eslint-disable react/prop-types */

import { RxCross2 } from 'react-icons/rx'; 
import { useContext, useState } from 'react';  
import CategorySelect from './CategorySelect/CategorySelect';
import TitleSelect from './TitleSelect/TitleSelect';
import DescriptionSelect from './DescriptionSelect/DescriptionSelect';
import PrioritySet from './PrioritySet/PrioritySet';
import DeadlineSet from './DeadlineSet/DeadlineSet';
import MembarAssign from './MembarAssign/MembarAssign';
import { SingleTaskContext } from '../../../../../context/SingleTaskProvider';

const AddTaskModal = () => {

    const { handleSubmit , setModalOpen} = useContext(SingleTaskContext);
    
    const [error, setError] = useState("");
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskPriority, setTaskPriority] = useState(1);
    const [taskDeadline, setTaskDeadline] = useState(new Date());
    const [userAssign, setUserAssign] = useState("");
 
    const handleSubmitas = (e) => {
        e.preventDefault();


        if (taskTitle && userAssign?.length > 0 && taskDescription != "") {
            const taskInfo = {
                taskTitle,
                taskDescription,
                taskPriority,
                taskDeadline,
                userAssign,
                progress: "10"
            }
 
            setError("");
            handleSubmit(taskInfo);
            setModalOpen(false);
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
            <div className="moda absolute  top-4  w-[350px] sm:w-[500px] bg-gradient-to-t from-[#E6FFFF] via-white to-[#E6FFFF]">
                <RxCross2 className="absolute top-2 right-3 text-xl font-bold cursor-pointer " onClick={() => setModalOpen(false)} />
                <form>

                    <CategorySelect />

                    <TitleSelect catagorydata={"catagorydata"} taskTitle={taskTitle} setTaskTitle={setTaskTitle} />

                    <DescriptionSelect taskTitle={taskTitle} taskDescription={taskDescription} setTaskDescription={setTaskDescription} />

                    <PrioritySet taskTitle={taskTitle} taskDescription={taskDescription} taskPriority={taskPriority} setTaskPriority={setTaskPriority} />

                    <DeadlineSet taskDeadline={taskDeadline} setTaskDeadline={setTaskDeadline} />

                    <MembarAssign taskTitle={taskTitle} taskDescription={taskDescription} userAssign={userAssign} setUserAssign={setUserAssign} />

                    {
                        error && <p className='text-center mt-2 text-red-600'>{error}</p>
                    }
                    <button onClick={handleSubmitas} type="submit" className={` ${(taskTitle != "" && userAssign != "") ? " cursor-pointer" : " cursor-not-allowed "}  w-full   mt-4 bg-secondary/[.9] hover:bg-secondary/[.7]   text-white px-5  font-medium   py-3 rounded-full `} >
                        Create Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTaskModal;