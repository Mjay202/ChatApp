// import and use express
const express = require ("express")
const app = express();

// dotenv
require ("dotenv").config()


// set cors
const cors = require('cors')
app.use(cors())

// set up moongoose


const connection = app.listen(PORT, ()=> {
    console.log("The server has started successfully at PORT " + PORT)
})

// require and set up socket.io

const socketServer = require ("socket.io")
const io = socketServer(connection, {
    cors : {origin: "*"}

})

io.on('connection', (socket)=>{
    console.log('Socket connected succesfully')
})