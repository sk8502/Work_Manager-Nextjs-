import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";



export async function GET(request,{params}){
const {userId}=params;
try {
   const task=await Task.find({
        userId:userId,
    });
    return NextResponse.json(task);
} catch (error) {
    console.log(error);
    return getResponseMessage("error get datta by user id ",404,false);
}

};