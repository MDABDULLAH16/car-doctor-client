import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const loadServices = useLoaderData();
  console.log(loadServices);
  return (
    <div className='my-16'>
      <div className='text-center w-1/2 mx-auto space-y-5'>
        <h4 className='font-bold text-2xl text-[#FF3811]'>Service</h4>
        <h3 className='text-5xl font-bold'>Our Service Area</h3>
        <p className='text-[#737373]'>
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.
        </p>
      </div>
      <div className='grid lg:grid-cols-3 sm:grid-cols-1  '>
        {loadServices.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className='flex justify-center my-8'>
        <button className='btn btn-outline hover:bg-success rounded-lg  text-[#FF3811]'>
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
