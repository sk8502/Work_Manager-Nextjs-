
"use client"
import UserContext from '@/context/userContext'
import { login } from '@/services/userService'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'

const Login = () => {
  const router=useRouter();
const context=useContext(UserContext);
   const [loginData,setLoginData]= useState({
        email:"",
        password:""
    })


    const loginFormSubmitt=async (event)=>{
        event.preventDefault();
        if(loginData.email.trim() ==="" || loginData.password.trim() ==="" ||loginData.email.trim()==null){
            toast.warning("Invalid usrername & password" ,{
                position:"top-center",
            })
            return;
        }

        try {
         const result= await login(loginData);
         console.log(result);
         toast.success("LoginIn",{
          position:'top-center'
        })
        //redirect to home page
        context.setUser(result.user);
        router.push("/profile/user");
        } catch (error) {
          toast.error(error.response.data.message,{
            position:'top-center'
          })
        }

    }
  return (
    <div className="grid grid-cols-12 ">
    <div className="col-span-4 col-start-5">
      <div className="py-5">
      <form className="space-y-4" action='#!' onSubmit={loginFormSubmitt}>
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
                  setLoginData({
                    ...loginData,
                    email: e.target.value,
                  });
                }}
                value={loginData.email}
              />
            </div>
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
                  setLoginData({
                    ...loginData,
                    password: e.target.value,
                  });
                }}
                value={loginData.password}
              />
            </div>
            <div className="mt-3 text-center">
              <button
                className="px-2 ms-3 bg-green-500 rounded hover:bg-orange-500"
                type="submit"
              >
                Login
              </button>
              <button type="button" className="px-2 ms-3 bg-green-500 rounded hover:bg-orange-500"
            //   onClick={resetData}
              >
                Reset
              </button>
            </div>
        
      </form>
    </div>
  </div>
  </div>
  
  )
}

export default Login
