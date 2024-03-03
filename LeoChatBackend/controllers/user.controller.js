import User from "../models/user.model.js"

const getUserForSideBar = async(req,res)=>{
    try {
        const loggedInUserId = req.user._id

        const allUser = await User.find({_id:{$ne:loggedInUserId}}).select('-password')

        res.status(200).json(allUser)
         
    } catch (error) {
        console.log('Error in get user controller',error.message)
        res.status(500).json({message:"Internal Server Error"})
    }
}


export default {
    getUserForSideBar
}