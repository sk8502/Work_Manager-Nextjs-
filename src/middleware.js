import { NextResponse } from 'next/server'
import  { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    console.log("middleware extcuteed")

  const authtoken=  request.cookies.get("loginToken")?.value;
  console.log(authtoken);
  if(request.nextUrl.pathname==="/api/login" ||request.nextUrl.pathname=="/api/users"){
    return;
  }
const loggedInUserNotAcess=request.nextUrl.pathname==="/login" ||
                            request.nextUrl.pathname=="/signup"
                        ;
                        
if(loggedInUserNotAcess ){
    if( authtoken){
        return NextResponse.redirect(new URL('/profile/user', request.url));

    }
   // return new Response('Unauthorized',{status:401})
}else{
    if(!authtoken){
      if(request.nextUrl.pathname.startsWith("/api") ){
        return   NextResponse.json({
          messge:"ACESS DENIED!!!! ",
          sucess:false,
       
        },{
          status:401,
        }
        );
      }
        return NextResponse.redirect(new URL('/login', request.url));
 
    }
}

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/",
            "/login",
            "/signup",
            "/add-task",
            "/show-task",
            "/profile/:path*",
            "/api/:path*"
            ]
}