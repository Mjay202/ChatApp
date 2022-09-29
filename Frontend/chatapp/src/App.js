import React from 'react'
import Display from './components/Display'
import socketClient from "socket.io-client"
import {Routes, Route} from "react-router-dom"
import {useEffect, useState, useRef} from 'react'

function App() {

  // const [socket, setsocket] = useState("")
  let endpoint = "http://localhost:5000/"
  let socket = useRef()
  console.log(socket)

  useEffect(() => {
  socket.current = socketClient(endpoint);
  
  }, [])

  return (
    <>
        
        <Routes>
          <Route path= "/chat" element={<Display socket={socket}/>} />
        </Routes>

        



    
    </>
  );
}

export default App;
