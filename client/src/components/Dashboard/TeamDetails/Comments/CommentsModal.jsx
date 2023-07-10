/* eslint-disable react/prop-types */

import { RxCross2 } from 'react-icons/rx';

const CommentsModal = ({ closeModal, onSubmit , comment, setComment}) => {


    const handleChange = e => {
        const { target } = e;
        console.log(target.value)
        setComment(target.value);
    };

    const handleSubmit = (e) => {

        console.log(e)

        e.preventDefault();
        
        onSubmit();


        closeModal();
    };


    return (
        <div className=" modal-container  overflow-y-auto "  >
            <div className="moda absolute    w-[350px] sm:w-[500px] bg-gradient-to-t from-[#E6FFFF] via-white to-[#E6FFFF]">
                <RxCross2 className="absolute top-2 right-3 text-xl font-bold cursor-pointer " onClick={closeModal} />
                <form>

                    <textarea
                        value={comment}
                        onChange={handleChange}
                        type="text"
                        className={`  border-[1px] border-slate-300 w-full focus:outline-0 mt-8 px-5 py-2 rounded-lg `}
                        placeholder="Enter your comment"
                    />

                    <button type="submit" className="w-full mt-4 bg-secondary/[.9] hover:bg-secondary/[.7] cursor-pointer  text-white px-5  font-medium   py-3 rounded-full " onClick={handleSubmit}>
                        Add Comment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CommentsModal;