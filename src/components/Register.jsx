import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase.init';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Register = () => {
    const [errors, seterrors] = useState('');
    const [success, setsuccess] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const handleRegister = (event) => {
        event.preventDefault()
        const email = (event.target.email.value)
        const password = (event.target.password.value)
        const terms= (event.target.term.checked)
       
        //reset error status
        seterrors('');
        setsuccess('')

        if(!terms){
           seterrors('Place Accept Our Terms & Condition')
           return;
        }
        //create user with email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res.user)
                setsuccess(true);
            })
            .catch(error => {
                seterrors(error.message)
                setsuccess(false);
            })
    }
    return (
        <div>
            <div className="text-center  py-10 rounded-2xl shadow-2xl max-w-lg mx-auto my-20">
                <h1 className="my-10 text-3xl font-bold ">Register</h1>
                <form onSubmit={handleRegister} className="grid gap-3 mb-5">

                    <div>
                        <label className="input validator">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>
                            <input name='email' type="email" placeholder="mail@site.com" required />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>

                    </div>
                    <div className='relative'>
                        <p onClick={() => setShowPassword(!showPassword)} className=' absolute hover:cursor-pointer left-95 z-40 top-3 '>{showPassword ? <FaEyeSlash /> : <FaEye />}</p>
                        <label className="input validator">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                    ></path>
                                    <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                </g>
                            </svg>
                            <input
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                required
                                placeholder="Password"
                                minlength="8"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                            />
                        </label>

                        <p className="validator-hint hidden">
                            Must be more than 8 characters, including
                            <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                        </p>
                    </div>
                    <div>
                        <label className="label">
                            <input name='term'
                             type="checkbox" defaultChecked className="checkbox" />
                            Accept Our Terms & Condition
                        </label>
                    </div>
                    <div>
                        <button className="btn w-80 bg-amber-400">Register Now</button>
                    </div>
                </form>



                {
                    errors && <p>{errors}</p>
                }
                {
                    success && <p className='text-green-500'>Register Successfull</p>
                }
               <p>Alrady have an acount to this website please <Link to='/login' className=" text-blue-600 hover:underline">Log-In</Link></p>
            </div>

        </div>
    );
};

export default Register;