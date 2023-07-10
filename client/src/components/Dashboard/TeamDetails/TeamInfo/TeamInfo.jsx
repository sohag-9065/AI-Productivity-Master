/* eslint-disable react/prop-types */

import { useContext } from "react";
import { SingleTaskContext } from "../../../../context/SingleTaskProvider";


const TeamInfo = () => {

  const { membarsInfo } = useContext(SingleTaskContext);


  return (
    <div className={`   px-5 bg-slate-200 pb-4 w-[350px] lg:w-[550px] rounded-lg  `}>
      <p className="text-2xl md:text-3xl  my-3 text-center  mb-4 mx-3 text-secondary border-slate-300">
        <span className=" border-b-2 border-slate-300 pb-2"> Team Membars</span>
      </p>
      <table className=" table  ">

        <thead className="bg-purple-300 text-white text-base font-light ">
          <tr>
            <th> </th>
            <th  >Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {membarsInfo?.map((membar, idx) => {

            return (
              <tr key={idx}  >
                <td>{idx + 1}.</td>
                <td className="  w-[70%]">{membar.user}</td>
                <td className=" ">{membar.status}</td> 
              </tr>
            );
          })}
        </tbody>
      </table>
 
    </div>
  );
};

export default TeamInfo;