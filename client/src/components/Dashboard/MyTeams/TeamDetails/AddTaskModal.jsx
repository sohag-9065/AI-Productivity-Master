
import { RxCross2 } from 'react-icons/rx';
import CategorySelect from '../../../TeamCreate/CategorySelect';
import { useState } from 'react'; 
import PrioritySet from './PrioritySet';
import MembarAssign from './MembarAssign';
import DescriptionSelect from './DescriptionSelect';
import TitleSelect from './TitleSelect';

const AddTaskModal = ({ closeModal }) => {
    const [catagorydata, setCatagoryData] = useState("");
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskPriority, setTaskPriority] = useState(1);
    const [userAssign, setUserAssign] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(catagorydata)
        console.log(taskTitle)
        console.log(taskDescription)
        console.log(taskPriority)


        closeModal();
    };
    return (
        <div className=" modal-container  overflow-y-auto "  >
            <div className="moda absolute  top-8  w-[350px] sm:w-[500px] bg-gradient-to-t from-[#E6FFFF] via-white to-[#E6FFFF]">
                <RxCross2 className="absolute top-2 right-3 text-xl font-bold cursor-pointer " onClick={closeModal} />
                <form>

                    <CategorySelect setCatagoryData={setCatagoryData} /> 

                    <TitleSelect  catagorydata={"catagorydata"} value={taskTitle} setValue={setTaskTitle} />  

                    <DescriptionSelect taskTitle={taskTitle} value={taskDescription} setValue={setTaskDescription}/>
 

                    <PrioritySet taskDescription={taskDescription} taskPriority={taskPriority} setTaskPriority={setTaskPriority} />


                    <MembarAssign setCatagoryData={setUserAssign}/>  
                    <button type="submit" className="w-full mt-4 bg-secondary/[.9] hover:bg-secondary/[.7] cursor-pointer  text-white px-5  font-medium   py-3 rounded-full " onClick={handleSubmit}>
                        Create Task
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTaskModal;