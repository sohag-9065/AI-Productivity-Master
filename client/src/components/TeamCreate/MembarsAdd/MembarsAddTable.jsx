/* eslint-disable react/prop-types */
 
import { BsFillTrashFill } from "react-icons/bs";
import '../Description/DescriptionTable.css'

const MembarsAddTable = ({userNames,  deleteRow }) => {
    return (
        <div className=" table-wrapper">
          <table className=" table">
            <thead className="bg-secondary/[.8] text-white text-base font-light ">
              <tr>
                <th>Sr.</th>
                <th className="expand">Name</th> 
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {userNames.map((user, idx) => { 
    
                return (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td className="expand">{user}</td> 
                     
                    <td className="fit expand">
                      <span className="actions">
                        <BsFillTrashFill
                          className="delete-btn"
                          onClick={() => deleteRow(idx)}
                        /> 
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
};

export default MembarsAddTable;