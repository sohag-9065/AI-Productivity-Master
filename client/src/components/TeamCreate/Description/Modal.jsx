/* eslint-disable react/prop-types */

import { useState } from "react";

import "./Modal.css";

const Modal = ({ closeModal, onSubmit, defaultValue }) => {
    const [formState, setFormState] = useState(
        defaultValue || { 
            description: "",
            priority: 1,
        }
    );
    const [errors, setErrors] = useState("");

    const validateForm = () => {
        if (formState.description && formState.priority) {
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
                        <label htmlFor="description">Description</label>
                        <textarea
                            name="description"
                            onChange={handleChange}
                            value={formState.description}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Priority</label>
                        <select
                            name="priority"
                            onChange={handleChange}
                            value={formState.priority}
                        >
                            <option value="live">1</option>
                            <option value="draft">2</option>
                            <option value="error">3</option>
                            <option value="error">4</option>
                            <option value="error">5</option>
                        </select>
                    </div>
                    {errors && <div className="error">{`Please include: ${errors}`}</div>}
                    <button type="submit" className="btn" onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};


export default Modal;

