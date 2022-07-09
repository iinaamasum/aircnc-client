import React from 'react';
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init.js';
import LoadingComponent from '../../Shared/LoadingComponent.jsx';
import Navbar from '../../Shared/Navbar';

const UpdateProfile = () => {
  // variables and imports
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [user] = useAuthState(auth);
  const [signInWithEmailAndPassword, userForm, loadingForm, errorForm] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);

  // functions
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  const onSubmit = async (data) => {
    try {
      signInWithEmailAndPassword(data.email, data.password);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   if (user || userForm || userGoogle) {
  //     // navigate('/');
  //   }
  // }, [user, userForm, userGoogle, navigate]);

  if (loadingForm || loadingGoogle) {
    return <LoadingComponent />;
  }

  if (errorForm || errorGoogle) {
    console.log('error');
  }
  return (
    <>
      <Navbar />
      <div class="w-full md:w-1/2 flex items-center justify-end h-[90vh] mx-auto container px-3 sm:px-6 md:px-10 text-black">
        <div
          // glassmorphism
          style={{
            background: 'rgba( 255, 255, 255, 0.1 )',
            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
            backdropFilter: 'blur( 3px )',
          }}
          class="w-full shadow-2xl rounded-xl py-10 bg-transparent"
        >
          <h1 className="text-3xl font-semibold text-center mb-5">
            Update Info
          </h1>
          <p className="w-full px-3 sm:px-6 md:px-10 text-sm">
            If you don't want to update the info now, you can skip and update
            again from dashboard. Want to skip?{' '}
            <Link className="btn-link" to="/">
              Click here
            </Link>
          </p>
          <div className="w-full px-3 sm:px-6 md:px-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-base font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  class="input input-bordered bg-[#F6F6F6] focus:outline-none font-medium tracking-wide text-black"
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Name is required!',
                    },
                  })}
                />
                <label className="level font-bold">
                  {errors.email?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              {/* password field */}
              <div class="form-control mb-1">
                <label class="label">
                  <span class="label-text text-base font-semibold">
                    Phone Number
                  </span>
                </label>
                <input
                  type="Number"
                  placeholder="Enter Your Contact Number"
                  class="input input-bordered bg-[#F6F6F6] focus:outline-none font-medium tracking-wide text-black"
                  {...register('phone', {
                    required: {
                      value: true,
                      message: 'Phone is required!',
                    },
                  })}
                />
                <label className="level font-bold">
                  {errors.phone?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              <input
                className="btn btn-accent w-full my-1 text-xl capitalize"
                type="submit"
                value="Update Info"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
