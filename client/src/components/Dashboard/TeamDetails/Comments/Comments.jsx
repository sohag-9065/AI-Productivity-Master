/* eslint-disable react/prop-types */

import { BiMessageRoundedAdd } from "react-icons/bi";
import CommentsTable from "./CommentsTable";
import CommentsModal from "./CommentsModal";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../context/AuthProvider";
import { useParams } from "react-router-dom";
import { SingleTaskContext } from "../../../../context/SingleTaskProvider";
import aTeamUpdate from "../../../../loaders/update/aTeamUpdate";


const Comments = () => {

    const { id } = useParams();
    const { user } = useContext(AuthContext)

    const {
        comments,
        commentsModalOpen,
        setCommentsModalOpen,
        refetch
    } = useContext(SingleTaskContext);

    const [comment, setComment] = useState("");

    const handleSubmit = () => {

        console.log(user)

        const userComment = {
            comment,
            user: user?.displayName
        }

        comments.push(userComment);

        aTeamUpdate(id, "comments", comments, refetch, "Comment Added");
    }

    const handleDelete = (reaminCommnets) => {

        aTeamUpdate(id, "comments", reaminCommnets, refetch, "Comment Added");

    }

    return (
        <div className="mt-4">
            <div className="w-[450px] lg:w-[550px]  px-5   py-6 space-y-2 bg-slate-200  rounded-lg  border-slate-500 ">

                {
                    comments?.length > 0 ?

                        <div>

                            <p className="text-2xl md:text-3xl  text-center  mb-4 mx-3 text-secondary border-slate-300">
                                <span className=" border-b-2 border-slate-300 pb-2"> All Commnets  ({comments.length})</span>
                            </p>

                            <CommentsTable 
                            comments={comments}
                            handleDelete={handleDelete}
                             />


                        </div >
                        :
                        <p className="text-2xl text-center md:text-3xl text-blue-400">No comment has been added yet!</p>
                }

                <div className="flex justify-center  ">
                    <p onClick={() => setCommentsModalOpen(true)} className=" flex items-center gap-4 transition  duration-300  hover:delay-100 cursor-pointer bg-secondary text-white  hover:bg-secondary/[.8]    px-5 py-3 rounded-full text-center  mt-4 ">
                        Add New Comment  pppp
                        <BiMessageRoundedAdd className="text-white text-2xl" />
                    </p>
                </div>
            </div>



            {commentsModalOpen && (
                <CommentsModal
                    closeModal={() => {
                        setCommentsModalOpen(false);
                    }}
                    comment={comment}
                    setComment={setComment}
                    onSubmit={handleSubmit}
                />
            )}
        </div>
    );
};

export default Comments;