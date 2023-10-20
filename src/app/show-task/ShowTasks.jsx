
"use client"
import UserContext from '@/context/userContext';
import { deleteTask, getTaskOfUser } from '@/services/taskService'
import React, { useContext, useEffect, useState } from 'react'
import Task from './Task';
import { toast } from 'react-toastify';

const ShowTasks = () => {
const [tasks,setTask]=useState([]);
const context =useContext(UserContext);

    async function loadTask(userId){
        try {
            console.log(userId)
        const tasks=await getTaskOfUser(userId);
        console.log(tasks)
        setTask([...tasks].reverse());
        } catch (error) {
            console.log(error)
        }    
    }
    useEffect(()=>{
       if(context.user){
        console.log("user test for show data" +context.user._id);
          loadTask(context.user._id);
          }
 
          },[context.user]);
//delete task
async function deleteTaskParent(taskId){

    try {
      const reesult=await deleteTask(taskId);
      toast.success("Task is deleted")
      const newtask=tasks.filter(item=>item._id != taskId)
      setTask(newtask);
    } catch (error) {
      console.log(error)
      toast.error("error in deleting task")    }

}




  return (
    <div className=' grid grid-cols-12 mt-3'>
      <div className='col-span-6 col-start-4' >
               <h1 className='text-3xl text-center'> TASK LIST({tasks.length})</h1>  
               {
                tasks.map((task)=>(
                    <Task task={task} key={task._id} deleteTaskParent={deleteTaskParent}/>
                ))} 
      </div>
    </div>
  )
}

export default ShowTasks
