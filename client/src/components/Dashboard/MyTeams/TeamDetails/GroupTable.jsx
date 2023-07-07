/* eslint-disable react/prop-types */
 
const GroupTable = ({ userInfo }) => {
    return (
      <div className=" table-wrapper pb-8 w-[350px] lg:w-[600px] overflow-y-auto h-[320px]   px-4 ">
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
            {userInfo?.map((user, idx) => {
  
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td className="expand w-[80%]">{user.user}</td>
                  <td className="expand">{user.status}</td>
  
  
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

export default GroupTable;