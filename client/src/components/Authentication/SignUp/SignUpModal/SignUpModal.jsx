import React, { useContext } from 'react'
import { AuthContext } from '../../../../context/AuthProvider';

const SignUpModal = () => {
    const {googleLogin, getProfile} = useContext(AuthContext)
    const saveUserInfo = (profile) => {
        fetch(`http://localhost:5000/api/v1/users`, {
          method: "Post",
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(profile)
        })
          .then(res => res.json())
          .then(inserted => {
            console.log(inserted)
          })
      }
    const handleGoogleLogin = event=>{
        event.preventDefault();
        const form = event.target;
        const userName= form.userName.value;
        console.log(userName)
        googleLogin()
        .then(res=>{
            const user = res.user;
            console.log(user)
            getProfile(userName)
            .then(res=>{
                console.log(res)
                saveUserInfo(user?.displayName, user?.email)
            })
        })
    }
  return (
    <>
        <input type="checkbox" id="google-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <label className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" htmlFor="google-modal">✕</label>
    <form className='p-4 mt-4' onSubmit={handleGoogleLogin}>
        <div className="form-control">
            <label className="label-text">Username</label>
            <input type="text" name="userName" className='input input-bordered mt-2' placeholder='Enter username' />
        </div>
        <input type="submit" value="Login with google" className='btn btn-success text-white block mx-auto text-center mt-4' />
    </form>
  </div>
</div>
    </>
  )
}

export default SignUpModal