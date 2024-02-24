import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { title, price } = service;
  return (
    <div>
      <h4 className='font-bold text-2xl text-center text-[#FF3811]'>
        Booking Service: {title}{" "}
      </h4>

      <form className='card-body  '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              type='text'
              placeholder='Name'
              name='name'
              defaultValue={user?.displayName}
              className='input input-bordered'
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Date</span>
            </label>
            <input
              type='date'
              placeholder='date'
              name='date'
              className='input input-bordered'
              required
            />
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              placeholder='email'
              name='email'
              defaultValue={user?.email}
              className='input input-bordered'
              required
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Price</span>
            </label>
            <input
              type='text'
              placeholder='Price'
              name='price'
              defaultValue={"$" + price}
              className='input input-bordered'
              required
            />
          </div>
        </div>
        <div className='form-control my-4'>
          <input
            className='btn btn-block btn-primary'
            type='submit'
            value='Booking Now'
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
