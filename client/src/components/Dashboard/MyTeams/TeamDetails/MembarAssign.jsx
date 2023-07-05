/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { AiOutlineReload } from "react-icons/ai";
import AutoSuggestInput from '../../../shared/AutoSuggestInput';
 
import { useParams } from 'react-router-dom';


const MembarAssign = ({setCatagoryData}) => {

    const [results, setResults] = useState();
    const [selectedCategory, setSelectedCategory] = useState("");

    const { id } = useParams();
    const [userAvailable, setUserAvailable] = useState({}); 

    useEffect(() => {
        const usersData = () => {
            fetch(`http://localhost:5000/api/v1/teams?id=${id}`)
                .then(res => res.json())
                .then(res => {
                    const userInfo = res.data.userInfo;
                    const userName = [];
                     userInfo.forEach (user => { 
                        if(user.status == "accept")
                        {
                            userName.push(user.user);
                        }
                    });  

                    setUserAvailable(userName)
                });

        }
        usersData();

    }, [id]);
  
    useEffect(() => {
        if (selectedCategory) setCatagoryData(selectedCategory);
    }, [selectedCategory]);

    const handleChangeCategory = e => {
        const { target } = e;
        if (!target.value.trim()) return setResults([]);

        const filteredValue = userAvailable.filter((category) =>
            category.toLowerCase().includes(target.value)
        );
        setResults(filteredValue);
    };

    const handleClickCategory = () => {
        setResults(userAvailable);
    }
    return (
        <div>
            <div className='mt-3 mb-2 flex flex-col md:flex-row md:items-center  '>
                <p className="text-sm ml-1 ">Task Assign <span className='text-red-600'>*</span>  </p>

                <p className={` text-sm mt-1 md:mt-0 ml-1 md:ml-3 py-1 px-3 rounded-full bg-secondary/[.8] hover:bg-secondary/[.6]  text-white flex justify-center items-center cursor-pointer`}>
                    <AiOutlineReload className='mr-2' />
                    Generate with AI
                </p>

            </div>


            <AutoSuggestInput
                results={results}
                renderItem={(item) => <p>{item}</p>}
                onChange={handleChangeCategory} 
                value={selectedCategory}
                setValue={setSelectedCategory}
                handleClick={handleClickCategory} 
                placeholderlText={"Select Category"} 
            />
            
        </div>
    );
};

export default MembarAssign;