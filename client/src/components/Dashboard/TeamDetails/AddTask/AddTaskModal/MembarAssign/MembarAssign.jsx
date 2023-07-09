/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { AiOutlineReload } from "react-icons/ai"; 
import { Configuration, OpenAIApi } from 'openai';

import { useParams } from 'react-router-dom'; 
import Loading from '../../../../../shared/Loading';
import AutoSuggestInput from '../../../../../shared/AutoSuggestInput';

const MembarAssign = ({ taskTitle, taskDescription, userAssign, setUserAssign }) => {

    const [results, setResults] = useState([]);

    const { id } = useParams();
    const [userAvailable, setUserAvailable] = useState({});
    const [userInfoString, setUserInfoString] = useState("");
    const [allUsers, setAllUsers] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (taskTitle) {
            setError("")
        }

    }, [taskTitle])

    const configuration = new Configuration({
        apiKey: import.meta.env.VITE_CHAT_GPT_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    useEffect(() => {
        const usersData = () => {
            fetch(`http://localhost:5000/api/v1/teams/${id}`)
                .then(res => res.json())
                .then(res => {
                    const userInfo = res.data.userInfo;
                    const userAccept = [];
                    userInfo?.forEach(user => {
                        if (user.status == "accept") {
                            userAccept.push(user);
                        }
                    });

                    let nameAndSkill = `I have ${userAccept.length} employee.`;
                    let allName = [];

                    userAccept?.forEach(user => {

                        nameAndSkill += " One of then is called " + user.user + " and his skill is " + user.skills + ". ";
                        allName.push(user.user);
                    });

                    setUserInfoString(nameAndSkill);
                    setAllUsers(allName);

                    if (userAccept.length > 0) {
                        setUserAvailable(userAccept);
                    } else {
                        setError("Don't accept invite any of the membars")
                    }


                });

        }
        usersData();

    }, [id]);




    const handleAI = async () => {
        if (userAvailable.length < 1) {
            setError("Don't accept invite any of the membars")
            return;
        }
        if (!taskTitle) {
            setError("Complete task tilte first")
            return;
        }
        if (userAvailable.length == 1) {
            console.log("object 1");
            setUserAssign(allUsers[0]);
            return;
        }
        setError("")
        setIsLoading(true);

        let promt = `I created a task. Task title is ${taskTitle} . And 'Task description is ${taskDescription}. ${userInfoString}. who is the best for this task. just give the employee name. don't give extra word. you don't give me a extra charecter.`;

        try {
            const completion = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: promt,
                max_tokens: 30,
                temperature: 1,
            });

            let result = completion?.data?.choices[0]?.text.split('\n').join('');
            result = result.split('.').join('');
            if (result) {

                allUsers?.forEach(user => {
                    if (result.includes(user)) {

                        setUserAssign(user);
                    }
                })

                setIsLoading(false);
                // console.log(completion?.data?.choices[0]?.text.split('\n').join(''));
            }

        } catch (error) {
            setIsLoading(false);
            console.error('Error:', error.message);
        }
    }


    const handleChangeUser = e => {
        const { target } = e;
        if (!target.value.trim()) return setResults([]);

        if (userAvailable.length < 1) {
            setError("Don't accept invite any of the membars")
            setUserAssign("");
            return;
        }
        if (!taskTitle) {
            setError("Complete task tilte first");
            setUserAssign("");
            return;
        }

        const userNames = [];
        userAvailable?.forEach(user => {
            userNames.push(user.user);

        })

        const match = userNames.find((name) => name ==   target.value  );

        if(!match) {
            setError("Ad valid User")
        }
        else {
            setError("")
        }


        const filteredValue = userNames.filter((Users) =>
            Users.toLowerCase().includes(target.value)
        );
        setResults(filteredValue);
    };
 

    const handleClickUser = () => {



        const userNames = [];
        userAvailable?.forEach(user => {
            userNames.push(user.user);

        })
        setResults(userNames);
    }
    return (
        <div>

            <div className='mt-3 mb-2 flex flex-col md:flex-row md:items-center  '>
                <p className="text-sm ml-1 ">Task Assign <span className='text-red-600'>*</span>  </p>

                <p onClick={handleAI} className={` ${taskTitle != "" ? "cursor-pointer" : "cursor-not-allowed"} text-sm mt-1 md:mt-0 ml-1 md:ml-3 py-1 px-3 rounded-full bg-secondary/[.8] hover:bg-secondary/[.6]  text-white flex justify-center items-center  `}>
                    <AiOutlineReload className='mr-2' />
                    Generate with AI
                </p>
                {
                    isLoading && <Loading />
                }

            </div>

            {
                error && <p className='text-center mt-2 text-red-600'>{error}</p>
            }
            <AutoSuggestInput
                results={results}
                renderItem={(item) => <p>{item}</p>}
                onChange={handleChangeUser}
                value={userAssign}
                setValue={setUserAssign}
                handleClick={handleClickUser}
                placeholderlText={"Membar Assign"}
            />



        </div>
    );
};

export default MembarAssign;