/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import './MembarAddModal.css';
import { RxCross2 } from 'react-icons/rx';
import AutoSuggestInput from "../../shared/AutoSuggestInput"; 
 
 

const MembarAddModal = ({ userNames, closeModal, onSubmit }) => {
 

    const [existUSers, setExistUSers] = useState([]);
    const [results, setResults] = useState([]);
    const [remainUsers, setRemainUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState("");
    const [errors, setErrors] = useState("");

    useEffect( () => {
        const usersData = async () => {
            const usersDataLoad = await fetch('http://localhost:5000/api/v1/users/name')
            const allusers = await usersDataLoad.json()

            if(allusers.data) {
                let names = [];
                allusers.data.forEach(element => {
                    names.push(element.name);
                });
                setExistUSers(names);
            }
          }
          usersData();
         
    } ,[])


    const handleChangeUsers = e => {
        const { target } = e;
        if (!target.value.trim()) return setResults([]);

        const filteredValue = remainUsers.filter((Users) =>
            Users.toLowerCase().includes(target.value)
        );
        setResults(filteredValue);
    };

    const handleClickUsers = () => {

        const remainUsers = existUSers.filter((user) => !userNames.includes(user));

        setRemainUsers(remainUsers);
        setResults(remainUsers);
    }

    const validateForm = () => {
        for (const userName of existUSers) {
            if (userName == selectedUsers) {
                setErrors("");
                return true;
            }
        }

        setErrors("valid user");
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

                    {errors && <div className="error">{`Please include: ${errors}`}</div>}

                    <button type="submit" className="w-full bg-secondary/[.9] hover:bg-secondary/[.7] cursor-pointer  text-white px-5  font-medium   py-3 rounded-full " onClick={handleSubmit}>
                        Add Membar
                    </button>
                </form>
            </div>
        </div>
    );
};  

export default MembarAddModal;