import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.init";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const {logingUser}=useContext(AuthContext)
    const [success,setsuccess]=useState(false)
    const [loginerrors,setloginerrors]=useState('')
    const emailref=useRef();
    const handelLogin=(e)=>{
    e.preventDefault()
    const email=e.target.email.value
    const password=e.target.password.value
    console.log(email,password)

    setsuccess(false)
    setloginerrors('')
    //login user

    logingUser(email,password)
    .then(res=>{
        console.log(res.user)
        setsuccess('Loging Successfull')
    })
    .catch(error=>{
        console.log(Error,error.message)
        setloginerrors(error.message)
    })
    
  }
  //forgate password
  const handelForgatePassword=()=>{
    console.log('Get me email email address',emailref.current.value)
    const email=emailref.current.value
    if(!email){
        console.log("Plase Provide a Valid Email address")
    }
    else{
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert('Reset email sent,Plase check your email')
        })
    }
  }
    return (
       <div className="hero  min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-2xl text-center font-bold">Login now!</h1>
    </div>
   <form className="" onSubmit={handelLogin}>
       <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" ref={emailref} name="email" className="input " placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input " placeholder="Password" />
          <div><a onClick={handelForgatePassword} className="link link-hover">Forgot password?</a></div>
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