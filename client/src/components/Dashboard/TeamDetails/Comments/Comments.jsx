/* eslint-disable react/prop-types */

import { BiMessageRoundedAdd } from "react-icons/bi";
import CommentsTable from "./CommentsTable"; 
import CommentsModal from "./CommentsModal";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../context/AuthProvider";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";


const Comments = ({ comments, commentsModalOpen, setCommentsModalOpen }) => {

    const { id } = useParams();
    const { user } = useContext(AuthContext)
    const [comment, setComent] = useState("");

    const handleSubmit = () => {

        console.log(user)

        const userComment = {
            comment,
            user: user?.displayName
        }

        comments.push(userComment);


        fetch(`http://localhost:5000/api/v1/teams/${id}`,
            {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ comments: comments })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Commet added successfully', { autoClose: 1000 }) 

            })
            .catch(error => toast.error(error.message));
        console.log(comments)
    }
    return (
        <div>
            <div className="flex justify-center mt-6  ">

                {
                    comments.length > 0 ?

                        <div>

                            <p className="text-2xl md:text-3xl  text-center  mb-4 mx-3 text-secondary border-slate-300">
                                <span className=" border-b-2 border-slate-300 pb-2"> All Commnets  ({comments.length})</span>
                            </p>

                            <CommentsTable comments={comments} />


                        </div >
                        :
                        <p className="text-2xl text-center md:text-3xl text-blue-400">No comment has been added yet!</p>
                }
            </div>

            <div className="flex justify-center  ">
                <p onClick={() => setCommentsModalOpen(true)} className=" flex items-center gap-4 transition  duration-300  hover:delay-100 cursor-pointer bg-secondary text-white  hover:bg-secondary/[.8]    px-5 py-3 rounded-full text-center  mt-4 ">
                    Add New Comment
                    <BiMessageRoundedAdd className="text-white text-2xl"/>
                </p>
            </div>

            {commentsModalOpen && (
                <CommentsModal
                    closeModal={() => {
                        setCommentsModalOpen(false);
                    }}
                    comment={comment}
                    setComent={setComent}
                    onSubmit={handleSubmit}
                />
            )}
        </div>
    );
};

export default Comments;