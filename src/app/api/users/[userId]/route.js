import { User } from "@/models/user";
import { NextResponse } from "next/server";

//get single user
export async function GET(request,{params}){
    const {userId}=params;
    try {
     const user=   await User.findById(userId);
     return NextResponse.json(user);
    } catch (error) {
        
    }

}
//update user

export async function PUT(request,{params}){
    const {userId}=params;
    const {name,password,about,profileURL}=await request.json();
    try {
      
     const user=   await User.findById(userId);
     user.name=name;
     user.about=about;
     user.password=password;
     user.profileURL=profileURL;
     const updateuser=await user.save();

     return NextResponse.json(updateuser);
    } catch (error) {
        return NextResponse.json({
            messge:"failed to update",
            sucess:false,
        })
    }

}

//delete user
export async function DELETE(request,{params}){
    const {userId}=params;
    try {
        await User.deleteOne({
            _id: userId,
        });
        return NextResponse.json({
            message:"user deleted",
            sucess:true
        });
    } catch (error) {
        
    }


}