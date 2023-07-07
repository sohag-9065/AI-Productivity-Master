import { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthProvider'
import { toast } from 'react-toastify'

const SignUp = () => {
  const { signUp, getProfile } = useContext(AuthContext)

  const location = useLocation();
  const navigate = useNavigate();
  const [existUSers, setExistUSers] = useState([]);
  const [errors, setErrors] = useState("");

  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    const usersData = async () => {
      const usersDataLoad = await fetch('http://localhost:5000/api/v1/users/name')
      const allusers = await usersDataLoad.json()

      if (allusers.data) {
        let names = [];
        allusers.data.forEach(element => {
          names.push(element.name);
        });
        setExistUSers(names);
      }
    }
    usersData();

  }, [])


  const handleUserName = (e) => {
    const user = e.target.value;

    setErrors("")

    existUSers.forEach(userName => {
      if (user == userName) {
        console.log("object")
        setErrors("Already exist user name.")
        return;
      }
    })
 
    console.log(user)
    console.log(existUSers)
  }

  const handleSignUp = event => {
    event.preventDefault();

    if(errors) {

      return
    }

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const profile = {
      name,
      email,
      password
    }

    signUp(email, password)
      .then(res => {
        console.log(res)
        getProfile(name)
          .then(res => {
            console.log(res)
            saveUserInfo(profile);
            toast.success('Register Successfully', { autoClose: 1000 })

            navigate(from, { replace: true });
          })
          .catch(error => toast.error(error.message));
      })
  }

  const saveUserInfo = (profile) => {

    profile.skills = [];

    fetch(`http://localhost:5000/api/v1/users`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(profile)
    })
      .then(res => res.json())
      .then(inserted => {

        console.log(inserted)

      })
      .catch(error => toast.error(error.message));
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register!</h1>
          <p className="py-6 capitalize">to create your own team and let the ai decide to manage the the task you just need to register</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input onChange={handleUserName} type="text" name='name' placeholder="username" className="input input-bordered" />

              {errors && <div className="error my-2"> {errors} </div>}
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
              <input type="submit" value="Register" className='btn btn-primary' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp