 
const validateTeamCreate = (teamName, userNames, setErrors) => {
    
    if (teamName != "" && userNames?.length > 0) {
        setErrors(""); 
        return true;
        
    } else if (!teamName) {
        setErrors("Please add Team Name"); 
    }
    else if (userNames?.length <= 0) {
        setErrors("Please add Membar");
    }

    setTimeout(() => {
        setErrors("")
    }, 2000);

    return false;
};

export default validateTeamCreate;