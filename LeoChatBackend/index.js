import path from 'path'
import express from "express";
import dotenv from 'dotenv'
import AppRoutes from './routes/index.js'
import cookieParser from "cookie-parser";
// import connetToDatabase from "./models/index.js";
import { app, server } from "./socket/socket.js";

const __dirname = path.resolve()

dotenv.config()


let PORT = process.env.PORT||5000

app.use(express.json())
app.use(cookieParser())
app.use('/api',AppRoutes)

app.use(express.static(path.join(__dirname,"/leoChatFrontEnd/dist")))
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"leoChatFrontEnd","dist","index.html"))
})


server.listen(PORT,()=>{
   
    console.log(`app listening ${PORT}`)
})