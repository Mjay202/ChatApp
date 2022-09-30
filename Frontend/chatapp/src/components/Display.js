import React from 'react'
import {useState,useEffect} from 'react'

const Display = ({socket}) => {

    const [message, setmessage] = useState("")
    const sendMessage = () => {
        console.log(message)
        socket.current.emit("sendMsg", message)
        
    }
    useEffect(() => {
        if (socket.current) {
            socket.current.on("broadcastMsg", (receivedMessage)=>{
                console.log(receivedMessage)
        })
    }
    })
  return (
    <>
        <div className="container">
            <div className="row col-8">
                <div className="mb-4 msgContainer mt-4">
                    
                </div>
                <textarea type="text" className="form-control msgContainer mb-4" placeholder="Message..." onChange={(e)=>setmessage(e.target.value)}></textarea>
                <button onClick={sendMessage} className="btn btn-success btn-md">Send Message</button>
              {/* <div className="text-center">Kilomee Kilomee</div> */}
                
          </div>


      </div> 

    </>
  )
}

export default Display