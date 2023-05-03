import React from 'react'

function Inputs() {
  return (
    <div className='input'>
        <input type='text' placeholder='Type something...'/>
        <div className="send">
            <span><i class="fa-solid fa-paperclip fa-xl"></i></span>
            <input type="file" style={{display:'none'}} id='file'/>
            <label htmlFor="file">
                <span><i class="fa-solid fa-file-circle-plus fa-xl"></i></span>
            </label>

            <button>Send</button>
        </div>
    </div>
  )
}

export default Inputs