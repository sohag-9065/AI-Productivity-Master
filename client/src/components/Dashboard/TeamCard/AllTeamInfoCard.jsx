/* eslint-disable react/prop-types */

const AllTeamInfoCard = ({ classAdd, userInfo }) => {


  return (
    <div className={`table-wrapper pb-8 ${classAdd}`}>
      <table className=" table  ">

        <caption className="caption-top my-2 ">
          Team Membars
        </caption>

        <thead className="bg-purple-300 text-white text-base font-light ">

          <tr>
            <th>Sr.</th>
            <th  >Name</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>
          {userInfo?.map((membar, idx) => {

            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td className="expand w-[80%]">{membar.user}</td>
                <td className="expand">{membar.status}</td>
              </tr>
            );
          
          })}
        </tbody>
      </table>
    </div>
  );
};
export default AllTeamInfoCard;