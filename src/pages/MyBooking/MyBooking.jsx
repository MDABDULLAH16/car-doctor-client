import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { TiDelete } from "react-icons/ti";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  console.log(bookings);

  const url = `http://localhost:5000/bookings?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div>
      <h4 className='font-bold text-4xl text-center text-[#FF3811]'>
        My Bookings
      </h4>

      <div>
        <div className='overflow-x-auto'>
          <table className='table'>
            {/* head */}
            {/* <thead>
              <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead> */}
            <tbody>
              {/* row 1 */}
              {bookings.map((booking) => (
                <tr className='text-2xl font-semibold'>
                  <th>
                    {/* <label>
                      <input type='checkbox' className='checkbox' />
                    </label> */}
                    <button className='text-4xl'>
                      <TiDelete />
                    </button>
                  </th>
                  <td>
                    <div className='flex items-center gap-3'>
                      <div className='avatar'>
                        <div className='mask mask-squircle w-12 h-12'>
                          <img src={booking.img} />
                        </div>
                      </div>
                      <div>
                        <div className='font-bold'>{booking.service}</div>
                        <div className='text-sm opacity-50'>
                          {booking.price}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {booking.customerName}
                    <br />
                    <span className='badge badge-ghost badge-sm'>
                      {booking.email}
                    </span>
                  </td>
                  <td>{booking.date}</td>
                  <th>
                    <p className='bg-[#FF3811] text-center text-white rounded-xl py-4 text-2xl font-semibold'>
                      Pending
                    </p>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
