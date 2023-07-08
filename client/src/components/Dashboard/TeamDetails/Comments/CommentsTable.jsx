/* eslint-disable react/prop-types */

const CommentsTable = ({ comments }) => {
    return (
        <div className="max-h-[300px] overflow-y-auto overflow-x-hidden  rounded-lg">
            <div className=" table-wrapper pb-5 pt-3 shadow-xl w-[350px] lg:w-[600px] px-3 ">
                <table className=" table     ">

                    <thead className="bg-purple-300 text-white text-base font-light ">
                        <tr>
                            <th>Sr.</th>
                            <th  >User</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody className=" ">
                        {comments?.map((user, idx) => {

                            return (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td className=" w-[15%]">{user.user}:  </td>
                                    <td className=" ">{user.comment}  </td>


                                </tr>
                            );
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CommentsTable;