import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.init";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [success,setsuccess]=useState(false)
    const [loginerrors,setloginerrors]=useState('')
  const handelLogin=(e)=>{
    e.preventDefault()
    const email=e.target.email.value
    const password=e.target.password.value
    console.log(email,password)

    setsuccess(false)
    setloginerrors('')
    //login user

    signInWithEmailAndPassword(auth,email,password)
    .then(res=>{
        console.log(res.user)
        
        if(!res.user.emailVerified){
            setloginerrors("Plase varify Your Email Address")
        }else{
            setsuccess(true)
        }
    })
    .catch(error=>{
        console.log(Error,error.message)
        setloginerrors(error.message)
    })
    
  }
    return (
       <div className="hero  min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl text-center font-bold">Login now!</h1>
    </div>
   <form  onSubmit={handelLogin}>
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn bg-amber-300 mt-4">Login</button>
        </fieldset>
      </div>
    </div>
   </form>
  
   {
      
        success  &&  <p className="text-green-400">User Login Successfull</p>
   }
   {
    loginerrors && <p className="text-red-500">{loginerrors}</p>
   }
   <p>New to this website please <Link to='/register' className="text-blue-600 hover:underline">Sign up</Link></p>
  </div>
</div>
    );
};

export default Login;