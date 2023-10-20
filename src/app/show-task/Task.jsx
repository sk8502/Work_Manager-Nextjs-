"use client"

import UserContext from '@/context/userContext'
import React, { useContext } from 'react'
import {RxCross1} from "react-icons/rx"
const Task = ({ task,deleteTaskParent }) => {
  const {user}=useContext(UserContext);

function deleteTask(taskId){
deleteTaskParent(taskId);
}


  return (
    <div className={` shadow-lg mt-2 rounded ${task.status=="completed"?"bg-green-800":"bg-gray-700" }`}>
      <div className='p-4'>
        <div className='flex justify-between'>
        <h1 className='text-2xl  font-semibold'>
            {task.title}</h1>
            <RxCross1 onClick={()=>{
              deleteTask(task._id)
            }}  className='shadow-lg hover:bg-white bg-gray-500 rounded-full cursor-pointer'/>

        </div>
        
            <p className='font-normal'>
                { task.content}
            </p>
            <div className='flex justify-between mt-3'>
            <p className='text-left'>
              Status: {" "} 
              <span className='font-bold'>{task.status}</span></p>

             <p className='text-right'>Author: <span className='font-bold'>{user?.name}</span></p>
            </div>
            
      </div>
    </div>
  )
}

export default Task;
