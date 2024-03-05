import express from "express";
import dotenv from 'dotenv'
import AppRoutes from './routes/index.js'
import cookieParser from "cookie-parser";
// import connetToDatabase from "./models/index.js";
import { app, server } from "./socket/socket.js";

dotenv.config()


let PORT = process.env.PORT||5000

app.use(express.json())
app.use(cookieParser())
app.use('/api',AppRoutes)


server.listen(PORT,()=>{
   
    console.log(`app listening ${PORT}`)
})