/* eslint-disable react/prop-types */ 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {subDays} from "date-fns";

const Deadline = ({taskDeadline, setTaskDeadline}) => { 

    return ( 
            <div className='mt-2 mb-2 flex flex-col md:flex-row md:items-center  '>
                <p className="text-sm ml-1 mr-4 ">Deadline: <span className='text-red-600'>*</span>   </p>
                <DatePicker
                    selected={taskDeadline}
                    dateFormat="dd/MM/yyyy"
                    showMonthDropdown
                    showYearDropdown
                    minDate={subDays(new Date(), 0)}
                    onChange={(date) => setTaskDeadline(date)}
                    className=' border-[1px] border-slate-300 text-red-600 w-full focus:outline-0 px-5 py-1 rounded-full '
                />
                
            </div> 
    );
};

export default Deadline;