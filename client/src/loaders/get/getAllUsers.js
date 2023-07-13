
export  const usersData = async () => {
  const usersDataLoad = await fetch('https://blue-sparkling-duck.cyclic.app/api/v1/users')
  const allusers = await usersDataLoad.json()

  return allusers 
}