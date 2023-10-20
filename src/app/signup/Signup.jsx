"use client";
import React, { useState } from "react";
import signupBanner from "../../assets/signup.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import { signUp } from "@/services/userService";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });
  const doSignup =async(event) => {
    event.preventDefault();
    if (data.name.trim() === "" || data.name == null) {
      toast.warning("name is required !!", {
        position: "top-center",
      });
      return;
    }
    try {
    const result= await signUp(data);
    console.log("testttt"+ result)
    toast.success("user is register ",{
      position:"top-center",
    })

   setData({
    name: "",
    email: "",
    password: "",
    about: "",
   })

    } catch (error) {
      console.log(error)
    }
  };

  const resetData=()=>{
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
     })
  }

  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-4 col-start-5">
        <div className="py-5">
          <div className="flex justify-center m-5">
            <Image
              src={signupBanner}
              alt="signup banner"
              style={{
                width: "40%",
              }}
            />
          </div>

          <h1 className="text-3xl text-center">Sign Up</h1>
          <form action="#!" className="m-5" onSubmit={doSignup}>
            {/* name field */}
            <div className="mt-3">
              <label
                htmlFor="user_name"
                className="block text-sm font-medium  mb-2"
              >
                UserName
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-gray-600 focus:ring-white border-black"
                placeholder="Enter Here"
                name="user_name"
                onChange={(e) => {
                  setData({
                    ...data,
                    name: e.target.value,
                  });
                }}
                value={data.name}
              />
            </div>
            {/* email field */}
            <div className="mt-3">
              <label
                htmlFor="user_email"
                className="block text-sm font-medium  mb-2"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-gray-600 focus:ring-white border-black"
                placeholder="Enter Here"
                id="user_email"
                name="user_email"
                onChange={(e) => {
                  setData({
                    ...data,
                    email: e.target.value,
                  });
                }}
                value={data.email}
              />
            </div>
            {/* password field */}
            <div className="mt-3">
              <label
                htmlFor="user_password"
                className="block text-sm font-medium  mb-2"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 rounded-lg bg-gray-600 focus:ring-white border-black"
                placeholder="Enter Here"
                id="user_password"
                onChange={(e) => {
                  setData({
                    ...data,
                    password: e.target.value,
                  });
                }}
                value={data.password}
              />
            </div>
            {/* name field */}
            <div className="mt-3">
              <label
                htmlFor="user_about"
                className="block text-sm font-medium  mb-2"
              >
                About
              </label>
              <textarea
                rows={8}
                type="text"
                className="w-full p-3 rounded-lg bg-gray-600 focus:ring-white border-black"
                placeholder="Enter Here"
                id="user_about"
                name="user_about"
                onChange={(e) => {
                  setData({
                    ...data,
                    about: e.target.value,
                  });
                }}
                value={data.about}
              />
            </div>

            <div className="mt-3 text-center">
              <button
                className="px-2 ms-3 bg-green-500 rounded hover:bg-orange-500"
                type="submit"
              >
                Signup
              </button>
              <button type="button" className="px-2 ms-3 bg-green-500 rounded hover:bg-orange-500"
              onClick={resetData}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
