import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";
import { User } from "@/models/user";
import jwt  from "jsonwebtoken";
import { connectDb } from "@/helper/db";
// async connectDb();
export  async function POST(request){

    const {email,password}= await request.json();
    
    try {
       await connectDb();
      const user=await  User.findOne({
            email:email,
        });
       
        if(user==null){
            throw new Error("user not found");
        }
        //compare password with hash stored in database
        const isMatch = await bcrypt.compareSync(password , user.password);
        if(!isMatch){
            throw new Error("password not match");
        }
       // generate token  for the loggedin user
       
       
        const jwtToken=jwt.sign({
            _id:user._id,
            name:user.name,

        },process.env.JWT_KEY);
        console.log(jwtToken)
 
        const responses=NextResponse.json({
            message:"login successful",
            sucess:true,
            user:user
        });
        responses.cookies.set("loginToken",jwtToken,{
            expiresIn:"1d",
           httpOnly:true,
        });
        return  responses;
    } catch (error) {
        return NextResponse.json({
            message:error.message,
            sucess:false,

        },{
            status:500
        })
    }
}

