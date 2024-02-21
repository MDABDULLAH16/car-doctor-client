import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <div className='grid relative grid-cols-2 gap-16 h-[556px] '>
      <div className=' col-span-1 relative  h-full '>
        <img
          className='absolute  rounded-lg min-h-[473px] max-w-[460px]'
          src={person}
          alt=''
        />
        <img
          className='max-w-[327px] h-[332px]  absolute right-0 bottom-0 bg-white p-2 rounded-lg  '
          src={parts}
          alt=''
        />
      </div>
      <div className='col-span-1 relative  h-full space-y-7 pl-4'>
        <h4 className='font-bold text-2xl text-[#FF3811]'>About Us</h4>
        <h1 className='text-6xl font-bold'>
          We are qualified & of experience in this field
        </h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.{" "}
        </p>
        <button className='rounded-[5px] py-4 absolute bottom-4 px-7 text-white bg-[#FF3811]'>
          Get More Info
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
