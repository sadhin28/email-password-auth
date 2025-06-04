import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
export const AuthContext = createContext(null)
  
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    //create user 
   const createUser = (email,password,name,photo)=>{
    return createUserWithEmailAndPassword(auth,email,password,name,photo)
   }
   //login user
   const logingUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
   }
   //set observer
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
    if(currentUser){
        console.log('current user',currentUser)
        setUser(currentUser)
    }else{
        console.log('No user login')
        setUser(null)
    }
   })

   return()=>{
        unsubscribe()
   }

   },[])
    const authinfo={
        createUser,
        logingUser,
        user
    }
    return (
       <AuthContext.Provider value={authinfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;