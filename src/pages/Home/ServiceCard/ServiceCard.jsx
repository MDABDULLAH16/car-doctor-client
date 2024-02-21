import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const ServiceCard = ({ service }) => {
  const { img, price, title, _id } = service;
  return (
    <div className=''>
      <div className='card h-[348px] card-compact p-6 m-4 w-96 bg-base-100 shadow-xl'>
        <figure>
          <img src={img} alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title font-bold text-2xl'>{title}</h2>
          <div className='card-actions text-[#FF3811]  items-center justify-between'>
            <p className='text-[20px] font-semibold'>Price: {price}</p>
            <Link className=''>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
