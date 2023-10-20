
//task 

import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import Jwt  from "jsonwebtoken";
import { connectDb } from "@/helper/db";


//get all task
export async function GET(){
   // let tasks=[];
    try {
        await connectDb();
     const  tasks=await Task.find();
     return NextResponse.json(tasks);
    } catch (error) {
        console.log(error);
        return getResponseMessage("error in getting data",404,false);
    }
 



}
//add task
export async function POST(request){

const {title,content,userId,status}=await request.json();
const authtoken=request.cookies.get("loginToken")?.value;
const token=Jwt.verify(authtoken,process.env.JWT_KEY)
// const user=  await User.findById(token._id)
console.log("add task "+token._id)
console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"+userId);
try {
    const task=new Task({

        title,
        content,       
        userId:token._id,
        status,
    });
    await connectDb();
   const createTask= await task.save();
   
return NextResponse.json(createTask,{
    status:201,
});
} catch (error) {
    console.log(error);
    return getResponseMessage("error in getting data",404,false);
}

}