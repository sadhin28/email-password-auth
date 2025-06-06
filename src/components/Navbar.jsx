import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const navigate = useNavigate()
  const {user,logoutUser} = useContext(AuthContext)


    const links =
    <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='login'>LogIn</NavLink></li>
      <li><NavLink to='register'>Register</NavLink></li>
      {
        user &&  <li><NavLink to='order'>Order</NavLink></li>
      }
      {
        user &&  <li><NavLink to='profile'>Profile</NavLink></li>
      }
    </>

    const handelSignOut=()=>{
      logoutUser()
      .then(()=>{
        console.log("User signout Successfull")
        navigate('/login')
      })
      .catch(error=>{
        console.log('Error',error.message)
      })
    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">MJS LED</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
   
  {
    user ? 
    <>
      
        <img className='w-10 h-10 rounded-full ' src={user?.photoURL} alt="" />
        
        <span>{user?.displayName}</span>
        <a onClick={handelSignOut} className='btn btn-sm'>Sign out</a>
      
    </>
    :<Link className='btn btn-sm' to='/login'>Log in</Link>
  }
    
  </div>
</div>
    );
};

export default Navbar;