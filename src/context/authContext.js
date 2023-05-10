//it basically used to add the user...
import { createContext, useState } from "react";

 export const authContext=createContext();

 export const authContextProvider=({children})=>{
    const[currrentUser,setCurrentUser]=useState({})
 }