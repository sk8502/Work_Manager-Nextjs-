"use client";

import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const CustomNavbar = () => {

  const context=useContext(UserContext);
  const router=useRouter();
async function doLogout(){
try {
  const result=await logout();
  console.log(result)
  context.setUser(undefined);
  router.push("/");
} catch (error) {
  console.log(error)
  toast.error("logout error");
}

  }
  console.log(context)
  return (
    <nav className="bg-blue-600 h-12 px-3 flex justify-between items-center rounded ">
      <div className="brand">
        <h1 className="text-2xl font-semibol">
          <a href="#">Work Manager</a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-3 ">
          {
            context.user && (
              <>
              <li>
            <Link href={"/"} className="hover:text-white  "> Home</Link>
          </li>
          <li>
            <Link href={"/add-task"}  className="hover:text-white">Add Task</Link>
          </li>
          <li>
          <Link href={"/show-task"}  className="hover:text-white">Show Task</Link>
          </li>
              </>
            ) 
          }
        </ul>
      </div>
      <div>
        <ul className="flex space-x-3">
          {
            context.user &&(

              <>
              <li>
          <Link href={"#!"}  >{context.user.name}</Link>
          </li>
          <li>
          <button onClick={doLogout}  >Logout</button>
          </li>
              </>
            )
          }
          {
            !context.user &&(
             <>
              <li>
          <Link href="/login"  >Login</Link>
          </li>
          <li>
          <Link href="/signup" >Signup</Link>
          </li></>
            )
          }
         
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
