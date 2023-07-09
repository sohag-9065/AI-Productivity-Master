/* eslint-disable react/prop-types */
import {  useState } from "react";
import '../../../../style/Modal.css';
import { RxCross2 } from 'react-icons/rx'; 
import useAllUsersName from "../../../../hooks/useAllUsersName";
import AutoSuggestInput from "../../../shared/AutoSuggestInput";


const MembarAddModal = ({ userNames, closeModal, onSubmit }) => {

    const [allUsersName  ] = useAllUsersName([]);

    const [results, setResults] = useState([]);
    const [remainUsers, setRemainUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState("");
    const [errors, setErrors] = useState("");

 

    const handleChangeUsers = e => {
        const { target } = e;
        if (!target.value.trim()) return setResults([]);

        const filteredValue = remainUsers.filter((Users) =>
            Users.toLowerCase().includes(target.value)
        );
        setResults(filteredValue);
    };

    const handleClickUsers = () => {

        const remainUsers = allUsersName.filter((user) => !userNames.includes(user));

        setRemainUsers(remainUsers);
        setResults(remainUsers);
    }

    const validateForm = () => {

        for (const userName of userNames) {
            if (userName == selectedUsers) {
                setErrors("Already added");
                return false;
            }
        }

        for (const userName of allUsersName) {
            if (userName == selectedUsers) {
                setErrors("");
                return true;
            }
        }

        setErrors("Please added valid user");
        
        return false;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        onSubmit(selectedUsers);

        closeModal();
    };

    return (
        <div
            className="modal-container"

        >
            <div className="moda  w-[350px] sm:w-[500px] relative bg-gradient-to-t from-[#E6FFFF] via-white to-[#E6FFFF]">
                <RxCross2 className="absolute top-2 right-3 text-xl font-bold cursor-pointer " onClick={closeModal} />
                <form>
                    <div className=" mb-8">

                        <p className="mb-2">User Name: </p>

                        <AutoSuggestInput
                            results={results}
                            renderItem={(item) => <p>{item}</p>}
                            onChange={handleChangeUsers}
                            value={selectedUsers}
                            setValue={setSelectedUsers}
                            handleClick={handleClickUsers}
                            placeholderlText={"Enter user name"}
                        />

                    </div>

                    {errors && <div className="error"> {errors}</div>}

                    <button type="submit" className="w-full bg-secondary/[.9] hover:bg-secondary/[.7] cursor-pointer  text-white px-5  font-medium   py-3 rounded-full " onClick={handleSubmit}>
                        Add Membar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MembarAddModal;