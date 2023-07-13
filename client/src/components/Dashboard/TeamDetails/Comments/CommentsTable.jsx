/* eslint-disable react/prop-types */

import { BsFillTrashFill } from "react-icons/bs";

const CommentsTable = ({ comments, handleDelete }) => {

    const handleDeleteComment = (index) => {

        const reaminCommnets = comments.filter((_, idx) => idx !== index); 
        handleDelete(reaminCommnets) 
    }
    return (
        <div>
            {
                comments?.map((comment, index) => <div
                    key={index}
                    className="grid grid-cols-10 bg-purple-200 p-3 mb-1 rounded-lg "
                >
                    <p className="col-span-2 font-bold  text-blue-500  ">{comment?.user}</p>
                    <div className="col-span-7 flex" >
                        <p className="font-bold mx-2">:</p>
                        <p className="text-slate-600 ">{comment?.comment} </p>
                    </div>

                    <p onClick={() => handleDeleteComment(index)}>
                        <BsFillTrashFill className="delete-btn" />
                    </p>
                </div>)
            }
        </div>
    );
};

export default CommentsTable;