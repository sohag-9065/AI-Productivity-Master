/* eslint-disable react/prop-types */
 
import AutoSuggestInput from '../shared/AutoSuggestInput';
import { useEffect, useState } from 'react';
import { AiOutlineReload } from "react-icons/ai";

const profiles = [
    "Allie Grater",
    "Aida Bugg",
    "Gabrielle",
    "Grace",
    "Hannah",
    "Heather",
    "John Doe",
    "Anne Teak",
    "Audie Yose",
    "Addie Minstra",
    "Anne Ortha",
];


const TitleSelect = ({ setProjectTitle }) => { 


 
    const [results, setResults] = useState();
    const [title, setTitle] = useState(""); 

    useEffect(() => {
        if (title) setProjectTitle(title);
    }, [title]);

    const handleChangeTitle = e => {
        const { target } = e;
        if (!target.value.trim()) return setResults([]);

        const filteredValue = profiles.filter((p) =>
            p.toLowerCase().includes(target.value)
        );
        setResults(filteredValue);
    }; 

    const handleClickTitle = () => {
        setResults(profiles);
    }

    const handleSuggestion = () => {
        console.log("suggestion Handler")
    }

    return (
        <div>

            <div className='mt-6 mb-2 flex flex-col md:flex-row md:items-center  '>
                <p className="text-sm ml-1 ">Title <span className='text-red-600'>*</span> ( Suggestion From AI ). </p>


                <p onClick={handleSuggestion} className="text-sm mt-1 md:mt-0 ml-1 md:ml-3 py-1 px-3 rounded-full bg-secondary/[.8] hover:bg-secondary/[.6]  text-white flex justify-center items-center cursor-pointer">
                    <AiOutlineReload className='mr-2' />
                    Regenerate
                </p>
                <p onClick={handleSuggestion} className="text-sm mt-1 md:mt-0 ml-1 md:ml-3 py-1 px-3 rounded-full bg-secondary/[.8] hover:bg-secondary/[.6]    text-white  flex justify-center items-center cursor-pointer">
                    <AiOutlineReload className='mr-2' />
                    Previous
                </p>
            </div>

            <AutoSuggestInput
                results={results}
                renderItem={(item) => <p>{item}</p>}
                onChange={handleChangeTitle} 
                value={title}
                setValue={setTitle} 
                handleClick={handleClickTitle} 
                placeholderlText={"Select Title"} 
            />
        </div>
    );
};

export default TitleSelect;