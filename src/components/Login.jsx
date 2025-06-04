import { sendPasswordResetEmail} from "firebase/auth";
import { auth } from "../firebase.init";
import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const navigate = useNavigate()
  
  const { logingUser,signInwithGoogle } = useContext(AuthContext)
  const [success, setsuccess] = useState(false)
  const [loginerrors, setloginerrors] = useState('')
  const emailref = useRef();

  const handelLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email, password)

    setsuccess(false)
    setloginerrors('')
    //login user

    logingUser(email, password)
      .then(res => {
        console.log(res.user)
        setsuccess('Loging Successfull')
        e.target.reset();
        navigate('/')
      })
      .catch(error => {
        console.log(Error, error.message)
        setloginerrors(error.message)
      })



  }
   //sign in with google 
    const handelGooglesignin=()=>{   
     
    signInwithGoogle()
    .then(res=>{
      navigate('/')
    })
  
    .catch(error => {
         
        console.log(Error, error.message)
        setloginerrors(error.message)
      })
    
  }
  //forgate password
  const handelForgatePassword = () => {
    console.log('Get me email email address', emailref.current.value)
    const email = emailref.current.value
    if (!email) {
      console.log("Plase Provide a Valid Email address")
    }
    else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
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
                <div className="divider">Or</div>
                <p>
                  <button onClick={handelGooglesignin} className="btn bg-white text-black border-[#e5e5e5]">
                  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                  Login with Google
                </button>
                </p>
              </fieldset>
            </div>
          </div>
        </form>

        {

          success && <p className="text-green-400">User Login Successfull</p>
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