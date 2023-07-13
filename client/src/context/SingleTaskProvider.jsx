/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom"; 
import Loading from "../components/shared/Loading";


export const SingleTaskContext = createContext()

const SingleTaskProvider = ({ children }) => {

    const [teaminfo, setTeamInfo] = useState({});
    const [teamName, setTeamName] = useState("");
    const [teamleader, setTeamleader] = useState("");
    const [taskInfo, setTaskInfo] = useState([]);
    const [membarsInfo, setMembarsInfo] = useState([]);
    const [comments, setComments] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [commentsModalOpen, setCommentsModalOpen] = useState(false);

    const { id = "" } = useParams();

    const { data: taskInfoArr, isLoading, refetch } = useQuery('taskallInfo', () =>
        fetch(`http://localhost:5000/api/v1/teams/${id}`, {
            method: 'GET'
        })
            .then(res => res.json())
    );
   
    useEffect(() => {

        if (taskInfoArr) {
            setTeamInfo(taskInfoArr?.data);
            setTeamName(taskInfoArr?.data?.teamName);
            setMembarsInfo(taskInfoArr?.data?.userInfo);
            setTeamleader(taskInfoArr?.data?.teamleader)
            setTaskInfo(taskInfoArr?.data?.taskInfo);
            setComments(taskInfoArr?.data?.comments);
        }

    }, [taskInfoArr]);

    if (isLoading) {
        return <Loading></Loading>
    }

    const getSingleTaskInfo = (index) => {
        console.log(index)

    }
 

    const info = {
        teaminfo,
        teamName, 
        teamleader,
        membarsInfo,
        taskInfo,
        comments,
        modalOpen,
        setModalOpen,
        commentsModalOpen,
        setCommentsModalOpen, 
        getSingleTaskInfo,
        refetch,
    }

    return (
        <SingleTaskContext.Provider value={info}>
            {children}
        </SingleTaskContext.Provider>
    );
};

export default SingleTaskProvider;