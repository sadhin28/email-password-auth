import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setloading]=useState(true)
    //create user 
   const createUser = (email,password,name,photo)=>{
    setloading(false);
    return createUserWithEmailAndPassword(auth,email,password,name,photo)
   }
   //login user
   const logingUser=(email,password)=>{
    setloading(false)
    return signInWithEmailAndPassword(auth,email,password)
   }
   //set observer
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
    if(currentUser){
        console.log('current user',currentUser)
        setUser(currentUser)
        setloading(false);
    }else{
        console.log('No user login')
        setUser(null)
    }
   })

   return()=>{
        unsubscribe()
   }

   },[])
   //logout user
   const logoutUser=()=>{
    setloading(true)
     return signOut(auth);
   }
   //loging with google
   const signInwithGoogle=()=>{
        signInWithPopup(auth,googleProvider)
   }
    const authinfo={
        loading,
        createUser,
        logoutUser,
        logingUser,
        signInwithGoogle,
        user
    }
    return (
       <AuthContext.Provider value={authinfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;