import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

const ProgressModal = ({ value, setVAlue, closeModal, onSubmit }) => {

    const [error, setError] = useState("");

    const handleProgressChange = (e) => {
        e.preventDefault();

        const upValue = parseInt(e.target.value);

        if(upValue > 100 ) {
            setError("Max 100 % ");
            setVAlue(100);
            return;
        }

        if(upValue < 1 ) {
            setError("Min 1 % ");
            setVAlue(1);
            return;
        }

        setVAlue(e.target.value);

    }
    const handkeProgrsstionUpdate = (e) => {
        e.preventDefault();
        console.log(value)


        onSubmit();
        closeModal();

    }

    return (
        <div className=" modal-container  overflow-y-auto "  >
            <div className="moda absolute  py-10   w-[350px] sm:w-[500px] bg-gradient-to-t from-[#E6FFFF] via-white to-[#E6FFFF]">
                <RxCross2 className="absolute top-2 right-3 text-xl font-bold cursor-pointer " onClick={closeModal} />
                <form>

                    <input
                        value={value}
                        onChange={handleProgressChange}
                        type="text"
                        className='border-[1px] border-slate-300 w-full focus:outline-0 px-5 py-3 rounded-full '
                    />

                    {
                        error && <p className='text-center mt-2 text-red-600'>{error}</p>
                    }
                    <p onClick={handkeProgrsstionUpdate}   className={`    w-full   mt-4 bg-secondary/[.9] hover:bg-secondary/[.7]   text-white px-5  font-medium   py-3 rounded-full `} >
                        Update Progress
                    </p>
                </form>
            </div>
        </div>
    );
};

export default ProgressModal;