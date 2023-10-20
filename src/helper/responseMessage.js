import { NextResponse } from "next/server"


export const getResponseMessage=(message,statusCode,sucessStatus)=>{

    return NextResponse.json(

{  message:message,
    sucess:sucessStatus,
},
{
    status : statusCode,
}
      
    );
};