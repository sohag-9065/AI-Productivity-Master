
export const usersData = async () => {
    const usersDataLoad = await fetch('http://localhost:5000/api/v1/users')
    const allusers = await usersDataLoad.json()
  
    return { allusers }
  }