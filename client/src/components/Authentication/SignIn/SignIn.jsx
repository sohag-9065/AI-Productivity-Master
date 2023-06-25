import React from 'react'
import { useContext } from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import { AuthContext } from '../../../context/AuthProvider'

const SignIn = () => {
    const {signIn} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || "/"
    const handleSignIn=event=>{
        event.preventDefault();
        const form = event.target;
        const email= form.email.value;
        const password = form.password.value;
        const profile = {
            email,
            password
        }
        console.log(profile)
        signIn(email,password)
        .then(res=>{
            const user = res.user;
            console.log(user)
            navigate(from,{replace:true})
        })
    }
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6 capitalize">to create your own team and let the ai decide to manage the the task you just need to login</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignIn} className="card-body">
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
            <span className="label-text-alt">new to Ai Productive Master? <Link className=' link link-hover' to="/signUp">Register</Link></span>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="Login" className='btn btn-primary' />
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default SignIn