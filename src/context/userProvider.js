"use client"
import React, { useEffect, useState } from 'react'
import UserContext from './userContext'
import { toast } from 'react-toastify';
import { currentUser } from '@/services/userService';

const UserProvider = ({children}) => {

 const [user,setUser]=   useState(undefined);

 useEffect(async()=>{
try {
    const loggerUser=await currentUser();
    console.log(loggerUser)
    setUser({...loggerUser});
} catch (error) {
    console.log(error)
    toast.error("error during current user fetch")
    setUser(undefined)
}
 }
 
 ,[]);
  return (

      <UserContext.Provider value={{user,setUser}}>
        {children}
      </UserContext.Provider>

  )
}

export default UserProvider
