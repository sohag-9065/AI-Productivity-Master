/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import MembarsTable from './MembarsTable';
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const TeamCard = ({ userName, team }) => {
    const { teamName, teamleader, userInfo, _id } = team;
    const [users, setUsers] = useState(userInfo);

    const [userstatus, setUserStatus] = useState("pending");

    console.log(team)
    console.log(userName);
    console.log(userstatus);

    useEffect(() => {
        userInfo?.forEach(obj => {
            if (obj.user == userName) {
                setUserStatus(obj.status)
            }
        });

    }, [userName, userInfo]);


    const handleAccept = () => {

        const upInfo = userInfo?.map(obj => {
            if (obj.user == userName) {
                return {
                    ...obj,
                    status: "accept"
                }
            }
            else {
                return {
                    ...obj
                }
            }

        });

        console.log(upInfo)

        fetch(`http://localhost:5000/api/v1/teams/${_id}`,
            {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ userInfo: upInfo })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUserStatus("accept")
                setUsers(upInfo);
                toast.success('Status update successfully', { autoClose: 1000 })

            })
            .catch(error => toast.error(error.message));


        console.log(userInfo)
    }


    return (
        <div className='relative bg-slate-200  p-6  h-[400px] rounded-lg'>
            <h1 className='text-xl  text-blue-400'>Team Name: {teamName}</h1>
            <h1 className='text-lg pb-2  '>Team Leader: <span className='text-blue-400'>{teamleader}</span></h1>

            <div className='overflow-y-auto h-[258px]   px-4    '>
                <MembarsTable userInfo={users} />
            </div>
            <p className='py-10'> </p>

            {
                userstatus == "pending" ?
                    <p onClick={handleAccept} className='flex justify-center items-center gap-3  absolute  bottom-0  text-center left-[50%]  -translate-x-[50%] cursor-pointer px-3 py-2 bg-green-600 text-white w-full'>
                        <span>Accept Invite</span>
                        <FaCheck />
                    </p>
                    :
                    <Link to={`details/${_id}`} className='flex justify-center items-center gap-3 absolute  bottom-0 text-center left-[50%]  -translate-x-[50%] cursor-pointer px-3 py-2 bg-secondary text-white w-full'>
                        <span>See Details</span>
                        <FaArrowRight />
                    </Link>

            }


        </div>
    );
};

export default TeamCard;