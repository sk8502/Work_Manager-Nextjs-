
"use client"
import React from 'react';
import image from '../../assets/signup.svg'; // Import your Image component
import Image from 'next/image';

const ActionSection = () => {
  return (
    <section className="relative flex bg-blue-500 items-center justify-center">
      <div className="absolute inset-0 z-10 bg-opacity-75 bg-blue-500"></div>
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="relative z-20 p-4 md:p-8 text-center text-black">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Task Manager</h2>
        <p className="text-base md:text-lg mb-4 md:mb-8">
          Keep track of your tasks and stay organized.
        </p>
        <button className="px-4 md:px-6 py-2 md:py-3 bg-blue-500 hover:bg-blue-600 rounded-md text-black font-semibold shadow">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default ActionSection;
