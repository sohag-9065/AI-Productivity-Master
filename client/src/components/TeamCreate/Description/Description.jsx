/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import DescriptionTable from "./DescriptionTable";
import Modal from "./Modal";
import './Description.css'

const Description = ({ setProjectDescription }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
        {
            description: "This is the main page of the website",
            priority: 2,
        },
        {
            description: "This page has details about the company",
            priority: 1,
        },
        {
            description: "Prices for different subscriptions",
            priority: 2,
        },
    ]);
    const [rowToEdit, setRowToEdit] = useState(null);

    useEffect(() => {
        if (rows) setProjectDescription([...rows]);
    }, [rows])

    const handleDeleteRow = (targetIndex) => {
        setRows(rows.filter((_, idx) => idx !== targetIndex));
    };

    const handleEditRow = (idx) => {
        setRowToEdit(idx);

        setModalOpen(true);
    };

    const handleSubmit = (newRow) => {
        rowToEdit === null
            ? setRows([...rows, newRow])
            : setRows(
                rows.map((currRow, idx) => {
                    if (idx !== rowToEdit) return currRow;

                    return newRow;
                })
            );
    };

    return (
        <div className="">

            <div className='mt-6 mb-2 flex flex-col md:flex-row md:items-center  '>
                <p className="text-sm ml-1 ">Description <span className='text-red-600'>*</span> ( Suggestion From AI). </p>
            </div>
            <DescriptionTable rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
            <p onClick={() => setModalOpen(true)} className=" text-center mt-4 ">

                <span className="bg-secondary/[.8] hover:bg-secondary/[.6] cursor-pointer text-white px-5 font-medium  py-2 rounded-full  ">Add More</span>
            </p>
            {modalOpen && (
                <Modal
                    closeModal={() => {
                        setModalOpen(false);
                        setRowToEdit(null);
                    }}
                    onSubmit={handleSubmit}
                    defaultValue={rowToEdit !== null && rows[rowToEdit]}
                />
            )}
        </div>
    );
}

export default Description;