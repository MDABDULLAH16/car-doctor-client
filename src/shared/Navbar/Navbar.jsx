import React, { useContext } from "react";
import logo from "../../../public/logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  const navLink = (
    <div div className='flex items-center'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link>Services</Link>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
      {user && (
        <li>
          <Link to='/bookings'>My Bookings</Link>
        </li>
      )}
      <li className='font-bold mx-2'>{user?.displayName}</li>
      <li>
        {user ? (
          <div>
            <Link onClick={handleLogOut} className=' btn-warning'>
              SignOut
            </Link>
          </div>
        ) : (
          <Link to='login'>Login</Link>
        )}
      </li>
    </div>
  );
  return (
    <div className='navbar bg-base-100 font-semibold'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            {" "}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            {navLink}
          </ul>
        </div>
        <img src={logo} alt='' />
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>{navLink}</ul>
      </div>
      <div className='navbar-end'>
        <button className='btn btn-outline text-[#FF3811] '>Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
