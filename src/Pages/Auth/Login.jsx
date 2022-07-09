import React from 'react';
import { Link } from 'react-router-dom';
import login_bg from '../../images/login_bg.png';
import Navbar from '../../Shared/Navbar';

const Login = () => {
  return (
    <section
      style={{
        background: `url('${login_bg}')`,
        backgroundOrigin: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Navbar text="text-gray-200" btnBg="btn-error" />
      <div class="w-full md:w-1/2 flex items-center justify-end min-h-screen mx-auto container px-3 sm:px-6 md:px-10">
        <div class="w-full shadow-2xl rounded-xl py-10 bg-[#FFF]">
          <h1 className="text-3xl font-semibold text-center mb-5">Login</h1>
          <div className="w-full px-3 sm:px-6 md:px-10">
            <form>
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-base font-semibold">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  class="input input-bordered bg-[#F6F6F6] focus:outline-none font-medium tracking-wide"
                />
              </div>
              <div class="form-control mb-1">
                <label class="label">
                  <span class="label-text text-base font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Password"
                  class="input input-bordered bg-[#F6F6F6] focus:outline-none font-medium tracking-wide"
                />
              </div>
              <div className="text-sm my-1">
                <p>
                  Don't have an account?
                  <Link
                    className="btn-link ml-1 text-blue-600 capitalize"
                    to="/register"
                  >
                    Create Account Now
                  </Link>
                </p>
                <p>
                  Forgot password?
                  <Link
                    className="btn-link ml-1 text-blue-600 capitalize my-0"
                    to="/reset"
                  >
                    Click here to reset
                  </Link>
                </p>
              </div>
              <input
                className="btn btn-dark w-full my-1 text-xl capitalize"
                type="submit"
                value="Login"
              />
            </form>
            <div class="divider">Social Login</div>
            <div className="">
              <button className="btn btn-outline btn-dark w-full capitalize text-xl">
                Continue With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
