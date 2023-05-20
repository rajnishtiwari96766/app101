import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase"
import { createContext, useEffect ,useState} from "react";

export const AuthContext=createContext()

export const AuthContextProvider=({children})=>{
    const[currentUser,setCurrentUser]=useState({})

    //here in useeffect we are gonna check whether we have a user or not using firebase
    useEffect(()=>{
      const unsub=onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
            console.log(user)
        })

        //this is a cleanup function that avoids the memory leakage 
        return ()=>{
            unsub();
        }
    },[]);
return(  
    //this is basically used for routing all the children with the currentUser
    <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
)
}