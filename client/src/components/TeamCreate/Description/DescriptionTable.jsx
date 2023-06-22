/* eslint-disable react/prop-types */
 
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./DescriptionTable.css";

const DescriptionTable = ({ rows, deleteRow, editRow }) => {
    return (
        <div className="table-wrapper">
          <table className="table">
            <thead className="bg-secondary/[.8] text-white text-base font-light ">
              <tr>
                <th>Sr.</th>
                <th className="expand">Description</th>
                <th><abbr title="Priority">Pri</abbr></th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => { 
    
                return (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td className="expand">{row.description}</td>
                    <td className="expand">{row.priority}</td>
                     
                    <td className="fit expand">
                      <span className="actions">
                        <BsFillTrashFill
                          className="delete-btn"
                          onClick={() => deleteRow(idx)}
                        />
                        <BsFillPencilFill
                          className="edit-btn"
                          onClick={() => editRow(idx)}
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

export default DescriptionTable;
 