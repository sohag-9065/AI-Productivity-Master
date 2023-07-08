import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthProvider'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form';
import Loading from '../../shared/Loading'
import storeUserInformation from '../../../loaders/post/storeUserInformation' 
import useAllUsersName from '../../../hooks/useAllUsersName';
import EmailPassword from '../EmailPassword/EmailPassword';

const SignUp = () => {
  const { signUp, getProfile, loading } = useContext(AuthContext);

  const { register, formState: { errors }, reset, handleSubmit } = useForm();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingUser, setLoadingUser] = useState(false); 
  const [allUsersName, allUsersNameLoading] = useAllUsersName([]);
  const [error, setError] = useState("");
 
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";
 

  if (loading || loadingUser || allUsersNameLoading) {
    return <Loading />
  }


  const handleUserName = (e) => {  

    const userNameCheange = e.target.value; 

    setError("")

    allUsersName?.forEach(userName => {
      if (userNameCheange?.toLowerCase() == userName?.toLowerCase()) { 
        setError("Already exist user name.") ;
      }
    }) 
  }
 
  const onSubmit = data => {

    const { name } = data;

    const userInfo = {
      name,
      email,
      password,
      skills: ""
    } 
    setLoadingUser(true);

    signUp(email, password)
      .then(() => {

        getProfile(name)
          .then(() => {

            storeUserInformation(userInfo);

            toast.success('Register Successfully', { autoClose: 1000 })
            setLoadingUser(false);
            navigate(from, { replace: true });

          })
          .catch(error => {
            toast.error(error.message);
            setLoadingUser(false);
          });
      })
      .catch(error => {
        toast.error(error.message);
        setLoadingUser(false);
      });

    reset();
  };


  return ( 
    <div className="hero min-h-[90vh] bg-gradient-to-t from-white via-[#E6FFFF]  to-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-80 lg:min-w-[450px] shadow-2xl bg-base-100">
          <div className="card-body    rounded-md">

            <h1 className='text-2xl text-secondary text-center font-semibold'>Sign Up</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="form-control ">

              <label className="label">
                <span className="label-text">User Name</span>
              </label>

              <input
                type="text"
                className="input input-bordered mb-1 w-full"
                placeholder='Username'
                {...register('name', {
                  required: "User Name is required",
                  onChange: handleUserName,
                })}

              />
              {errors.name?.type === 'required' && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
              {error && <p className='text-red-600' role="alert">{error}</p>}
 
              <EmailPassword
                setEmail={setEmail}
                setPassword={setPassword}
              />

              <input type="submit" className='btn bg-secondary hover:bg-secondary/[.8]  text-white mt-6' value="Sign Up" />
            </form>

           
            <p className='text-xs'>Already have an account? <Link to="/signIn" className=' text-secondary cursor-pointer'>Please Login</Link></p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp