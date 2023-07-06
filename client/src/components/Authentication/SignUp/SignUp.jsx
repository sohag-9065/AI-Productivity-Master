import React from 'react'
import Lottie from "lottie-react"
import { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../../context/AuthProvider'
import SignUpModal from './SignUpModal/SignUpModal'
import collab from "../../../assets/animations/collaboration.json"

const SignUp = () => {
    const navigate = useNavigate()
    const {signUp,getProfile,logOut} = useContext(AuthContext)
    const handleSignUp=event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email= form.email.value;
        const password = form.password.value;
        const profile = {
            name,
            email,
            password
        }
        console.log(profile)
        signUp(email, password)
        .then(res=>{
            const user = res.user;
            // console.log(user)
            getProfile(name)
            .then(res=>{
                // const user = res.user;
                console.log(user);
                // console.log(res);
                logOut()
                navigate("/signIn")
            })
        })
    }
  return (
    <div className="hero min-h-screen p-10">
  <div className="flex gap-12 justify-around flex-col lg:flex-row-reverse">
    <div className="text-center w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold text-blue-500 text-center">Login now!</h1>
      <div className="mt-6 mx-auto">
      <Lottie animationData={collab}></Lottie>
      </div>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input type="text" name='name' placeholder="username" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
          <span className="label-text-alt">Already have an account? <Link className=' link link-hover' to="/signIn">Login</Link></span>
          </label>
        </div>
        <div className="form-control mt-6">
          {/* <button className="btn btn-primary">Login</button> */}
          <input type="submit" value="register" className='btn btn-primary' />
          <div className="divider">OR</div>
          <label htmlFor="google-modal" className="btn btn-success">Sign in with Google</label>
        </div>
        <SignUpModal/>
      </form>
    </div>
  </div>
</div>
  )
}

export default SignUp