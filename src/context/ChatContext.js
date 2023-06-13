import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase"
import { createContext, useContext, useEffect ,useReducer,useState} from "react";
import { AuthContext } from "./AuthContext";

export const ChatContext=createContext()

export const ChatContextProvider=({children})=>{
    const {currentUser}=useContext(AuthContext)
    const Initial_state={
        chatId:"null",
        user:{},
    }

    //reducer will be used to perform some or the other actions
    const chatReducer=(state,action)=>{
        switch(action.type){
            case "Change_user":
                return{
                    user:action.payload,
                    chatId: currentUser.uid>action.payload.uid ?
                     currentUser.uid+action.payload.uid 
                     : action.payload.uid+currentUser.uid,
                };

                default:
                    return state;
        }
    }
    const[state,dispatch]=useReducer(chatReducer,Initial_state);

return(  
    //this is basically used for routing all the children with the currentUser
    <ChatContext.Provider value={{data:state,dispatch }}>
        {children}
    </ChatContext.Provider>
)
}