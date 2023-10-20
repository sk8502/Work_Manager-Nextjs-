import mongoose from "mongoose";
import { User } from "../models/user.js";
export const connectDb = async()=>{
try {
const {connection}=   await mongoose.connect(process.env.MONGO_DB_URl,{
        dbName:"work_manager",
    });
    console.log("db connected ");
    //testing and creae user
//    const uuser =new User({

//         name:"shashi",
//         email:"test@gmail.com",
//         password:"test",
//         about:"this is sk"
//     })
//     await uuser.save();
   // console.log(connection);
} catch (error) {
    console.log("failed to connect with DB")
    console.log(error)
}

};