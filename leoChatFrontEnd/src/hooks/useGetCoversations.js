import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const useGetCoversations = () => {
 
    const[loading, setLoading] = useState(false)
    const [conversations, setConversations] = useState([])

    useEffect(()=>{
        getConnversations()
    },[])

    const getConnversations = async()=>{
        setLoading(true)
        try {
            const res = await fetch('/api/user')
            const data = await res.json()

            if(data.error){
                throw new Error(data.error)
            }
            setConversations(data)
        } catch (error) {
            toast.error(error.message)
        } finally{
            setLoading(false)
        }
    }
    return {loading, conversations}

}

export default useGetCoversations