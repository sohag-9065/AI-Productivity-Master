  /* eslint-disable react/prop-types */
 import { useEffect, useState } from 'react'; 
 import { FaArrowRight, FaCheck } from "react-icons/fa";
 import { Link } from 'react-router-dom'; 
import AllTeamInfoCard from './AllTeamInfoCard';
import aTeamUpdate from '../../../loaders/update/aTeamUpdate';
 
 const TeamCard = ({  team, userName,  refetch }) => {
     const { teamName, teamleader, userInfo, _id } = team; 
 
     const [userstatus, setUserStatus] = useState("pending"); 
 
     useEffect(() => {
         userInfo?.forEach(obj => {
             if (obj.user == userName) {
                 setUserStatus(obj.status)
             }
         });
 
         if(teamleader ==  userName ) {
             setUserStatus("accept")
         }
 
     }, [userName, userInfo, teamleader]);
 
 
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
  
         aTeamUpdate(_id, "userInfo", upInfo, refetch, "Invitation Accepted")  
     }
 
 
     return (
         <div className='relative bg-slate-200  p-6  h-[400px] rounded-lg'>
             <h1 className='text-xl  text-blue-400'>Team Name: {teamName}</h1>
             <h1 className='text-lg pb-2  '>Team Leader: <span className='text-blue-400'>{teamleader}</span></h1>
 
             <div className='overflow-y-auto h-[258px]   px-4    '>
                 <AllTeamInfoCard userInfo={userInfo} />
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