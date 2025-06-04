import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase.init";
import { Link, useNavigate } from "react-router-dom";
const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = (event) => {
        event.preventDefault()
        const email = (event.target.email.value)
        const password = (event.target.password.value)
        const name = event.target.name.value
        const photo = event.target.photo.value
        const terms = (event.target.term.checked)

        createUser(email, password, name, photo)
            .then(res => {
                console.log(res.user)

                //updateuser
                const profile = {
                    displayName: name,
                    photoURL: photo
                }
                updateProfile(auth.currentUser, profile)
                    .then(res => {
                        console.log('user Profile Update')
                    })
                    .catch(error => {
                        console.log('User profile Update error')
                    })

                event.target.reset();
                navigate('/')
            })
            .catch(error => {
                console.log('Error', error.message)
            })

    }
    return (
        <div>
            <div className="text-center  py-10 rounded-2xl shadow-2xl max-w-lg mx-auto my-20">
                <h1 className="my-10 text-3xl font-bold ">Sign-In</h1>
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
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </g>
                            </svg>
                            <input
                                type="text"
                                required
                                name='name'
                                placeholder="Username"

                            />
                        </label>

                    </div>
                    <div>
                        <label className="input validator">
                            <input
                                type="text"
                                required
                                name='photo'
                                placeholder="Photo Url"

                            />
                        </label>

                    </div>

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
                <p>Alrady have an acount to this website please <Link to='/login' className=" text-blue-600 hover:underline">Log-In</Link></p>

            </div>

        </div>
    );
};

export default SignIn;