
import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthProvider'
import { toast } from 'react-toastify'
import Loading from '../../shared/Loading'
import { useForm } from 'react-hook-form' 
import EmailPassword from '../EmailPassword/EmailPassword'

const SignIn = () => {
  const { user, signIn, loading } = useContext(AuthContext);
  const { reset, handleSubmit } = useForm();

  const [loadingUser, setLoadingUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {

    if (user) {
      navigate(from, { replace: true });
    }

  }, [user, from, navigate]);

  if (loading || loadingUser) {
    return <Loading />
  }

  const onSubmit = () => { 
 
    setLoadingUser(true);

    signIn(email, password)
      .then(() => {

        toast.success('SignIn Successfully', { autoClose: 1000 })
        setLoadingUser(false);

      })
      .catch(error => {
        toast.error(error.message);
        setLoadingUser(false);
      });

    reset();
  };

  return (
    <div className="hero min-h-[90vh] bg-gradient-to-t from-white via-[#E6FFFF] to-white ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-80 lg:min-w-[450px] shadow-2xl bg-base-100">
          <div className="card-body    rounded-md">

            <h1 className='text-2xl text-secondary text-center font-semibold'>Sign In</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="form-control ">
 
              <EmailPassword
                setEmail={setEmail}
                setPassword={setPassword}
              />

              <input type="submit" className='btn bg-secondary hover:bg-secondary/[.8]  text-white mt-6' value="Sign Up" />
            </form>
            <p className='text-xs'>New to Old Car? <Link to="/signUp" className=' text-secondary cursor-pointer'>Create new account</Link></p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn