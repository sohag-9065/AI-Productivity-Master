/* eslint-disable react/prop-types */
import React from 'react';
import MembarsTable from './MembarsTable';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const TeamCard = ({ team }) => {
    const { teamName, teamleader, userInfo, _id } = team;
    // const userNamearray = userInfo?.map( (user, indx) => user.user);
    // const userNameString = userNamearray.join(',  ');
    // console.log(userNameString)
    return (
        <div className='relative bg-slate-200  p-6 max-h-96 overflow-y-auto rounded-lg'>
            <h1 className='text-xl  text-blue-400'>Team Name: {teamName}</h1>
            <h1 className='text-lg  '>Leader: {teamleader}</h1>
            {/* <div className='flex   gap-6'>
                <p>Membars: </p>
                <ol className='flex flex-row gap-4 flex-wrap'>
                    {
                        userInfo?.map( (user, indx) => <li
                        key={indx}

                        >
                            {user.user}
                        </li>)
                    }
                </ol>

                
            </div> */}
            <MembarsTable userInfo={userInfo}  /> 

            <Link to={`details/${_id}`}  className='flex justify-center items-center gap-3 absolute bottom-0 text-center left-[50%]  -translate-x-[50%] cursor-pointer px-3 py-2 bg-secondary text-white w-full'>
                <span>See Details</span>
                <FaArrowRight />
                 </Link>
        </div>
    );
};

export default TeamCard;