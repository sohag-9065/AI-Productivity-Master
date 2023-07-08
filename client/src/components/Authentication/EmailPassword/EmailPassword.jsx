/* eslint-disable react/prop-types */

import { useForm } from 'react-hook-form';

const EmailPassword = ({setEmail, setPassword}) => {
    const { register, formState: { errors } } = useForm();
    return (
        < >
            <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                type="email"
                className="input input-bordered mb-1 w-full"
                placeholder='Email'
                {...register("email2",
                  {
                    required: "Email Address is required",
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid email"
                    },
                    onChange: (e) => { setEmail(e.target.value) }
                  }
                )}
                aria-invalid={
                  errors.email ? "true" : "false"
                }
              />
              {errors.email?.type === 'required' && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
              {errors.email?.type === 'pattern' && <p className='text-red-600' role="alert">{errors.email?.message}</p>}

              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type="password"
                autoComplete='username'
                className="input input-bordered mb-3"
                placeholder='Password'
                {...register("password2", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Must be 6 charecters or longer",
                  },
                  onChange: (e) => { setPassword(e.target.value) }
                }
                )}
              />

              {errors.password?.type === 'required' && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
              {errors.password?.type === 'minLength' && <p className='text-red-600' role="alert">{errors.password?.message}</p>}

        </>
    );
};

export default EmailPassword;