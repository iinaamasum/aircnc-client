import React, { useEffect } from 'react';
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init.js';
import signUp_bg from '../../images/signup.png';
import LoadingComponent from '../../Shared/LoadingComponent.jsx';
import Navbar from '../../Shared/Navbar';

const Register = () => {
  // variables and imports
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();
  const [user] = useAuthState(auth);
  const [createUserWithEmailAndPassword, userForm, loadingForm, errorForm] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);

  // functions
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  const onSubmit = async (data) => {
    try {
      await createUserWithEmailAndPassword(data.email, data.password);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user || userForm || userGoogle) {
      navigate('/updateProfile');
    }
  }, [user, userForm, userGoogle, navigate]);

  if (loadingForm || loadingGoogle) {
    return <LoadingComponent />;
  }

  if (errorForm || errorGoogle) {
    console.log('error');
  }

  return (
    <section
      style={{
        background: `url('${signUp_bg}')`,
        backgroundOrigin: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Navbar text="text-gray-200" btnBg="btn-error" />
      <div class="w-full md:w-1/2 flex items-center justify-end min-h-[90vh] mx-auto container px-3 sm:px-6 md:px-10 text-black">
        <div
          // glassmorphism
          style={{
            background: 'rgba( 255, 255, 255, 0.7)',
            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
            backdropFilter: 'blur( 4px )',
          }}
          class="w-full shadow-2xl rounded-xl py-10 bg-transparent"
        >
          <h1 className="text-3xl font-semibold text-center mb-5">Register</h1>
          <div className="w-full px-3 sm:px-6 md:px-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* email field  */}
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-base text-black font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  class="input input-bordered bg-[#F6F6F6] focus:outline-none font-medium tracking-wide text-black"
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Email is required!',
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                      message: 'Invalid Email Address!',
                    },
                  })}
                />
                <label className="level font-bold">
                  {errors.email?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === 'pattern' && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              {/* password field */}
              <div class="form-control mb-1">
                <label class="label">
                  <span class="label-text text-base text-black font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Password"
                  class="input input-bordered bg-[#F6F6F6] focus:outline-none font-medium tracking-wide text-black"
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Password is required!',
                    },
                    pattern: {
                      value: /(?=.*[!#$%&?^*@~() "])(?=.{8,})/,
                      message:
                        'Password Must be 8 char including a special character!',
                    },
                  })}
                />
                <label className="level font-bold">
                  {errors.password?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === 'pattern' && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {/* confirm pass  */}
              <div class="form-control mb-1">
                <label class="label">
                  <span class="label-text text-base text-black font-semibold">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Same Password"
                  class="input input-bordered bg-[#F6F6F6] focus:outline-none font-medium tracking-wide text-black"
                  {...register('cPassword', {
                    required: {
                      value: true,
                      message: 'Confirm Password is required!',
                    },
                    validate: (val) => {
                      const { password } = getValues();
                      return password === val || 'Passwords Mismatch!';
                    },
                  })}
                />
                <label className="level font-bold">
                  {errors.cPassword?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.cPassword.message}
                    </span>
                  )}
                  {errors.cPassword?.type === 'validate' && (
                    <span className="label-text-alt text-red-500">
                      {errors.cPassword.message}
                    </span>
                  )}
                </label>
              </div>
              {/* links */}
              <div className="text-sm my-1">
                <p>
                  Already have an account?
                  <Link
                    className="btn-link ml-1 text-blue-400 capitalize"
                    to="/register"
                  >
                    LogIn Now
                  </Link>
                </p>
                <p>
                  Forgot password?
                  <Link
                    className="btn-link ml-1 text-blue-400 capitalize my-0"
                    to="/reset"
                  >
                    Click here to reset
                  </Link>
                </p>
              </div>
              {/* form submit  */}
              <input
                className="btn btn-dark w-full my-1 text-xl capitalize"
                type="submit"
                value="Register"
              />
            </form>
            {/* social login  */}
            <div class="divider">Social Login</div>
            <div className="">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline btn-dark w-full capitalize text-xl"
              >
                Continue With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
