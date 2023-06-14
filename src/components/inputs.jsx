import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { v4 as uuid } from "uuid";
import { db, storage } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
const Inputs = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);
      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          // setErr(true)
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL (uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img:downloadURL
              }),
            })
          });
        })
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      })
    }
    await updateDoc(doc(db,"userChats",currentUser.uid),{
      [data.childId +".lastMessage"]:{
        text, //this will update the latest text
      },
      [data.childId+".date"]:serverTimestamp()
    })
    await updateDoc(doc(db,"userChats",data.user.uid),{
      [data.childId +".lastMessage"]:{
        text, //this will update the latest text
      },
      [data.childId+".date"]:serverTimestamp()
    })
    setText("")
    setImg(null)
  }
  return (
    <div className='input'>
      <input type='text' placeholder='Type something...' onChange={e => setText(e.target.value)} />
      <div className="send">
        <span><i class="fa-solid fa-paperclip fa-xl"></i></span>
        <input type="file" style={{ display: 'none' }} id='file' onChange={e => setImg(e.target.files[0])} />
        <label htmlFor="file">
          <span><i class="fa-solid fa-file-circle-plus fa-xl"></i></span>
        </label>

        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Inputs