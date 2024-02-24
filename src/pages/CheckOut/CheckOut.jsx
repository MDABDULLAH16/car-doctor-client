import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title } = service;
  return (
    <div>
      <h4 className='font-bold text-2xl text-[#FF3811]'>
        Booking Service: {title}{" "}
      </h4>
    </div>
  );
};

export default CheckOut;
