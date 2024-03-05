import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeletons'
import useListenMessages from '../../hooks/useListenMessages'


function Messages() {
  const {loading,messages} = useGetMessages()
  
  const lastMessageRef = useRef()
  useListenMessages()

  // console.log(messages)
  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior : "smooth"},100)
    })
  },[messages])

  return (
    <div className='px-4 flex-1 overflow-auto'>
        {!loading && messages.length >0 && messages.map((e)=>(<div key={messages._id} ref={lastMessageRef}><Message  message={e}/></div>))}
        {loading && [...Array(3)].map((_,i)=><MessageSkeleton key={i} />)}
        {!loading && messages.length===0 && (
          <p className="text-center">Send a message to start the Conversation</p>
        )}
    </div>
  )
}

export default Messages