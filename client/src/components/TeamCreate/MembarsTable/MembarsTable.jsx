  /* eslint-disable react/prop-types */
 
import { BsFillTrashFill } from "react-icons/bs";
import '../../../css/DescriptionTable.css'

const MembarsTable = ({userNames,  setUserNames }) => {
 
    const handleDeleteUser = (targetIndex) => {
        setUserNames(userNames.filter((_, idx) => idx !== targetIndex));
    };
    
    return (
        <div>
            {
                userNames.length != 0 ?
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
                                                        onClick={() => handleDeleteUser(idx)}
                                                    />
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    :
                    <> </>
            }
        </div>
    );
};

export default MembarsTable;
 