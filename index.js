//only file that runs in the backend

//1.dotenv
require('dotenv').config() //environment variable will be added to process.env file

//2.import express
const express = require('express')

//3.import cors
const cors = require('cors')
//import router
const router = require('./router')
//import mongodb
require('./db/connection')
//import app middleware
// const appMidleware

//4.create server
const codeCanvasServer = express()

//5.use cors to connect with frontend
codeCanvasServer.use(cors())

//6.convert JSON TO JS Format
//json()-middleware(to convert json format)
codeCanvasServer.use(express.json())

//server use router
codeCanvasServer.use(router)

//first- by which the folder have to be called
//second - export this folder
codeCanvasServer.use('/uploads',express.static('./uploads'))

//7.port()
const PORT = 3000 || process.env.PORT

//run the server
codeCanvasServer.listen(PORT, () => {
    console.log(`codeCanvasServer running successfully at port number:${PORT}`);
})


//get
codeCanvasServer.get('/', (req, res) => {
    res.send('get request received')
})

// codeCanvasServer.post('/',(req,res)=>{
//     res.send('post request received')
// })

// codeCanvasServer.put('/',(req,res)=>{
//     res.send('put request received')
// })

