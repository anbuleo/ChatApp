import express from 'express'
import protectRoute from '../middleware/protectRoute.js'
import UserController from '../controllers/user.controller.js'


const router = express.Router()

router.get('/',protectRoute,UserController.getUserForSideBar)

export default router