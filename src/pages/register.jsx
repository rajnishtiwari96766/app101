import React, { useState } from 'react'
import '../style.scss'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth,db,storage}  from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { updateProfile } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';

const Register=()=>   {
const[err,setErr]=useState(false) //it will handle the initial error state

const navigate=useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault() //this prevents for the page getting reloaded again and again  
    // console.log(e.target[0].value)
    const displayName=e.target[0].value;
    const email=e.target[1].value;
    const password=e.target[2].value;
    const file=e.target[3].files[0];


// const auth = getAuth(); 
try{
  const res=await createUserWithEmailAndPassword(auth, email, password)


// const storage = getStorage();
const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on( 
  (error) => {
    // Handle unsuccessful uploads
    setErr(true);
  }, 
  () => {
  
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      await updateProfile(res.user,{
        displayName,
        photoURL:downloadURL,
      })
      await setDoc(doc(db,'users',res.user.uid),{
        uid:res.user.uid,
        displayName,
        email,
        photoURL:downloadURL,
      });

      await setDoc(doc(db,"userChats",res.user.uid),{});
      navigate("/");
    });
  }
);

}catch(err){
setErr(true)
}
  
    }
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='Logo'>Chat app</span>
        <span className='title'>Register</span>

        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='display name'/>
          <input type='email' placeholder='email'/>
          <input type='password' placeholder='password'/>
          
          <input style={{display:"none"}}type='file' id='file'/>
          <label htmlFor='file'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&usqp=CAU' height={30} width={30} alt='loading'/>
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {err &&<span>Something went wrong</span>}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register