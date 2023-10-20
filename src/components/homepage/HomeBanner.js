"use client";
import React from 'react'
import homebanner from "../../assets/home.svg"
import Image from 'next/image';
const HomeBanner = () => {
  return (
    <div className="bg-blue-500 py-10">
    <div className="container mx-auto flex items-center justify-center">
      <div className="mr-10">
        <Image
          src={homebanner}
          alt="Banner Image"
          className="w-64 h-auto"
        />
      </div>
      <div className="text-black text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to our Task Management</h1>
        <p className="text-lg mb-6">Organize your task here.</p>
        <button className="bg-yellow-500 hover:bg-yellow-400 text-black py-2 px-4 rounded-lg transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  </div>
  )
}

export default HomeBanner;
