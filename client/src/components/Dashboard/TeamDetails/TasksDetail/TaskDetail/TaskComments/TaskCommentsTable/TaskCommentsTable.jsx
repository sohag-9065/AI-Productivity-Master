/* eslint-disable react/prop-types */
 
const TaskCommentsTable = ({ comments }) => {
    return (
        <div>
            {
                comments?.map((comment, index) => <div
                    key={index}
                    className="grid grid-cols-8 bg-purple-200 p-3 mb-1 rounded-lg "
                >
                    <p className="col-span-2 font-bold  text-blue-500  ">{comment?.user}</p>
                    <div className="col-span-6 flex" >
                        <p className="font-bold mx-2">:</p>
                        <p className="text-slate-600 ">{comment?.taskComment} </p>
                    </div>
                </div>)
            } 
        </div>
    );
};

export default TaskCommentsTable;