import express from 'express'
import messageController from '../controllers/message.controller.js'
import protectRoute from '../middleware/protectRoute.js'

const router = express.Router()

router.get('/getmsg/:id',protectRoute,messageController.getMessages)
router.post('/sendmsg/:id',protectRoute,messageController.sendMessage)

export default router