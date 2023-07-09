import { useContext } from "react"; 
import Comments from "./Comments/Comments";
import TeamInfo from "./TeamInfo/TeamInfo";
import TasksDetail from "./TasksDetail/TasksDetail"; 
import { AuthContext } from "../../../context/AuthProvider";
import AddTask from "./AddTask/AddTask";
import { SingleTaskContext } from "../../../context/SingleTaskProvider";


const TeamDetails = () => { 

    const { userName } = useContext(AuthContext);

    const { teamleader, teamName } = useContext(SingleTaskContext); 
     
 
    return (
        <div className="mb-10">
            <h1 className='text-2xl md:text-4xl  text-center '>
                <span className='border-b-2 pb-2 text-secondary border-slate-300'>{teamName}</span>
            </h1>

            <div className=" flex justify-center mt-6   ">

                <TeamInfo   />
                
            </div>

            <TasksDetail  />

            {
                (teamleader == userName) &&  <AddTask  />
                 
            } 
            
            <Comments />

        </div>

    );
};

export default TeamDetails;