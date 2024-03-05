import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetCoversations from '../../hooks/useGetCoversations';
import toast from 'react-hot-toast';

function SearchInput() {
  const [search, setSearch] = useState("")
  const {setSelectedConversation} = useConversation()
  const {conversations} = useGetCoversations()

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!search) return;
    if(search.length < 3 ){
     return toast.error('Minimum 3 characters')
    }
    const conversation = conversations.find((e)=>e.fullName.toLowerCase().includes(search.toLowerCase()))
    if(conversation){
      setSelectedConversation(conversation)
      setSearch("")

    }else toast.error('No such user Found')
  }

  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
        <input
        value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search....' className='bg-transparent input-warning input input-bordered rounded-full' />
        <button type='submit' className="btn btn-circle btn-warning bg-transparent text-white">
        <IoSearchSharp className='w-6 h-6 outline-none'/>
        </button>   
    </form>
  )
}

export default SearchInput