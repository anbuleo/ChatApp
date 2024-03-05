import { useEffect } from "react"
import { useSocketContext } from "../context/SocketContext"
import useConverSation from '../zustand/useConversation'
import notification from '../assets/Sounds/notification.mp3'
 
const useListenMessages = () => {
 const {socket} = useSocketContext()
 const {messages, setMessages} = useConverSation()
 useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
        newMessage.shouldShake = true
        const sound = new Audio(notification)
        sound.play()
        setMessages([...messages,newMessage])
    })
    return () => socket?.off("newMessage")
 },[messages,setMessages,socket])

}

export default useListenMessages