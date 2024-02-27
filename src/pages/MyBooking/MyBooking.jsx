import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { TiDelete } from "react-icons/ti";
import { data } from "autoprefixer";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  console.log(bookings);
  // const [bookings, setBookings] = useState(bookingData);
  // console.log(bookings);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleDeleteBooking = (id) => {
    const confirmed = confirm("Are You Sure To Delete Bookings?");
    if (confirmed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            // alert("user delete Successfully");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("order Confirmed");
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updatedBooking = bookings.find((booking) => booking._id === id);
          updatedBooking.status = "Confirm";
          const newBookings = [updatedBooking, ...remaining];
          setBookings(newBookings);
        }
      });
  };
  return (
    <div>
      <h4 className='font-bold text-4xl text-center text-[#FF3811]'>
        My Bookings {bookings.length}
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
                    <button
                      onClick={() => handleDeleteBooking(booking._id)}
                      className='text-4xl'
                    >
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
                    {booking.status === "Confirm" ? (
                      <p className='bg-indigo-400 text-center text-white rounded-xl py-4 px-6 text-2xl font-semibold'>
                        Confirmed
                      </p>
                    ) : (
                      <button onClick={() => handleBookingConfirm(booking._id)}>
                        <p className='bg-[#FF3811] text-center text-white rounded-xl py-4 px-6 text-2xl font-semibold'>
                          Pending
                        </p>
                      </button>
                    )}
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
