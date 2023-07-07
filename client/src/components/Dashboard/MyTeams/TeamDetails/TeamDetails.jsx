import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments/Comments";
import TaskInformation from "./TaskTable/TaskInformation";
import GroupTable from "./GroupTable";
import { toast } from "react-toastify";


const TeamDetails = () => {
    const { id } = useParams();
    const [teaminfo, setTeamInfo] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [commentsModalOpen, setCommentsModalOpen] = useState(false);
    const [taskInfo, setTaskInfo] = useState([]);
    const [comments, setComments] = useState([]);
    const [taskAdd, serTaskAdd] = useState("");

    useEffect(() => {
        const usersData = () => {
            fetch(`http://localhost:5000/api/v1/teams/${id}`)
                .then(res => res.json())
                .then(res => { 
                    setTeamInfo(res.data);
                    setTaskInfo(res.data.taskInfo);
                    setComments(res.data.comments);
                })
                .catch(error => toast.error(error.message));

        }
        usersData();

    }, [id, taskAdd]);

    const handleSubmit = (taskI) => {

        teaminfo.taskInfo.push(taskI);

        fetch(`http://localhost:5000/api/v1/teams/${id}`,
            {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ taskInfo: teaminfo.taskInfo })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data); 
                serTaskAdd("added");
                toast.success('Task created uccessfully', { autoClose: 1000 })
            })
            .catch(error => toast.error(error.message));

    };

    
    return (
        <div className="mb-10">
            <h1 className='text-2xl md:text-4xl  text-center '>
                <span className='border-b-2 pb-2 text-secondary border-slate-300'>{teaminfo?.teamName}</span>
            </h1>

            <div className=" flex justify-center mt-6   ">
                <GroupTable userInfo={teaminfo?.userInfo} />
            </div>

            <TaskInformation
                teamleader={teaminfo?.teamleader}
                userInfo={teaminfo?.userInfo}
                taskInfo={taskInfo}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                handleSubmit={handleSubmit}
            />

            <Comments
                comments={comments}
                commentsModalOpen={commentsModalOpen}
                setCommentsModalOpen={setCommentsModalOpen}
            />


        </div>
    );
};

export default TeamDetails;