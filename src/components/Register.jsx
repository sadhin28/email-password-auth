import React from 'react';

const Register = () => {
    const handleRegister=(event)=>{
        event.preventDefault()
        const email = (event.target.email.value)
        const password = (event.target.password.value)
    }
    return (
        <div>
             <div className="text-center max-w-lg mx-auto my-20">
            <h1 className="my-10 text-3xl font-bold ">Register</h1>
            <form onSubmit={handleRegister} className="grid gap-3">

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
                                <path
                                    d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                ></path>
                                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                            </g>
                        </svg>
                        <input
                            name='password'
                            type="password"
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
                    <button className="btn w-80 bg-amber-400">Log-In</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default Register;