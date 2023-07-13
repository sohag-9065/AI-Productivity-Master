
export  const usersData = async () => {
  const usersDataLoad = await fetch('https://api-ai-one.vercel.app/api/v1/users')
  const allusers = await usersDataLoad.json()

  return allusers 
}