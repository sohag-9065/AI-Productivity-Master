/* eslint-disable react/prop-types */
import { useState } from "react";
import './MembarAddModal.css';

const MembarAddModal = ({ closeModal, onSubmit }) => {
    const [formState, setFormState] = useState({ userName: ""});
    const [errors, setErrors] = useState("");

    const validateForm = () => {
        if (formState.userName ) {
            setErrors("");
            return true;
        } else {
            let errorFields = [];
            for (const [key, value] of Object.entries(formState)) {
                if (!value) {
                    errorFields.push(key);
                }
            }
            setErrors(errorFields.join(", "));
            return false;
        }
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        onSubmit(formState);

        closeModal();
    };

    return (
        <div
            className="modal-container"

        >
            <div className="moda  ">
                <form>
                    <div className="form-group">
                        <label htmlFor="description">User Name</label>
                        <input
                            name="userName"
                            onChange={handleChange}
                            value={formState.userName}
                        />
                    </div>
                     
                    {errors && <div className="error">{`Please include: ${errors}`}</div>}
                    <button type="submit" className="btn" onClick={handleSubmit}>
                        Add Membar
                    </button>
                </form>
            </div>
        </div>
    );
};



export default MembarAddModal;