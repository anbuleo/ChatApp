import React from 'react'
import Conversation from './Conversation'
import useGetCoversations from '../../hooks/useGetCoversations'
import { getRandomEmoji } from '../../utils/emojis'

function Conversations() {
    const {loading,conversations} = useGetCoversations()
  return   <div className='py-2 flex flex-col overflow-auto'>
        {
          conversations.map((e,i)=>(
            <Conversation
            key={e._id} 
            conversation={e} 
            emoji={getRandomEmoji()}
            lastIdx = {i === conversations.length-1}/>
          ))
        }


        {loading ? <span className='loading loading-spinner text-white mx-auto'></span> : null}
    </div>
 
}

export default Conversations