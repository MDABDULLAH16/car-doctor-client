import React from "react";
import login from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content  flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <img className='sm: hidden lg:block' src={login} alt='' />
          </div>
          <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <h1 className='text-5xl text-center mt-4 font-bold'>Login now!</h1>
            <form className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='email'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='password'
                  className='input input-bordered'
                  required
                />
                <label className='label'>
                  <a href='#' className='label-text-alt link link-hover'>
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Login</button>
              </div>
              <div>
                <p>
                  Are You First Time On{" "}
                  <span className='font-bold  text-[#FF3811]'>
                    {" "}
                    Car Doctor{" "}
                  </span>
                  ?{" "}
                  <Link className=' text-[#FF3811]' to='/register'>
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
