import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MembarsTable from "../MembarsTable";
import { FaArrowRight } from "react-icons/fa";
import AddTaskModal from "./AddTaskModal";


const TeamDetails = () => {
    const { id } = useParams();
    const [teaminfo, setTeamInfo] = useState({});
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const usersData = () => {
            fetch(`http://localhost:5000/api/v1/teams?id=${id}`)
                .then(res => res.json())
                .then(res => {
                    setTeamInfo(res.data)
                });

        }
        usersData();

    }, [id]);
 
    const handleSubmit = () =>  {
        console.log("submit object")
    };

    return (
        <div>
            <h1 className='text-2xl md:text-4xl  text-center '><span className='border-b-2 pb-2 text-secondary border-slate-300'>{teaminfo?.teamName}</span></h1>

            <div className=" flex justify-center mt-6 ">
                <MembarsTable userInfo={teaminfo?.userInfo} />
            </div>

            <div className="flex justify-center">
                <p onClick={() => setModalOpen(true)} className=" flex items-center gap-4 transition  duration-300  hover:delay-100 cursor-pointer bg-secondary text-white  hover:bg-secondary/[.8]    px-5 py-3 rounded-full text-center  mt-4 ">
                    Add New Task
                    <FaArrowRight /> 
                </p>
            </div>

            {modalOpen && (
                <AddTaskModal
                    closeModal={() => {
                        setModalOpen(false);
                    }}
                    onSubmit={handleSubmit}
                />
            )}
        </div>
    );
};

export default TeamDetails;