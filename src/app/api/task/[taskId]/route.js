
//get task by ID

import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
const {taskId}=params;
//console.log(taskId)
try {
  const task= await Task.findById(taskId);
  //console.log(task)
    return NextResponse.json(task);
} catch (error) {
    return getResponseMessage("Error is geeting task ",404,false);
}

}
//add task by id
// export async function POST(request,{parms}){


// }
//update task
export async function PUT(request,{params}){
  const {taskId}=params;
  
  try {
    const {title,content,status}= await request.json();
    console.log(title,content,status)
    let task= await Task.findById(taskId);

   (task.title=title), 
    (task.content=content),
   (task.status=status);

   const updatedTask= await task.save();
    console.log(task)
      return NextResponse.json(updatedTask);
  } catch (error) {
      return getResponseMessage("Error is updating task ",500,false);
  }

}
//delete task
export async function DELETE(request,{params}){
  const {taskId}=params;
  try {
      await Task.deleteOne({
          _id: taskId,
      });
      return getResponseMessage("Task deleted",200,true);
  } catch (error) {
      
  }

}