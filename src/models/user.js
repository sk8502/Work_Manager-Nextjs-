import mongoose, { Schema } from "mongoose";
const UserSchema=new Schema({
name:String,
email:{
    type:String,unique:true,
    required:[true,"Email required !!"]

},
password:{
    type: String,required:[true,'Password is Required']
},
about: String,

// adress:{
//     streetAddress:String,
//     city:String,
//     state:String,
//     zipcode:Number
// }
});
export const User=   mongoose.models.users||mongoose.model("users",UserSchema)
