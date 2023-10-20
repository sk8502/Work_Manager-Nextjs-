
import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import Jwt  from "jsonwebtoken";
import { NextResponse } from "next/server";


export async function GET(request){

    const authtoken=request.cookies.get("loginToken")?.value;
    const token=Jwt.verify(authtoken,process.env.JWT_KEY)
    await connectDb();
    const user=  await User.findById(token._id)
    console.log(authtoken)
    return NextResponse.json(user);
}