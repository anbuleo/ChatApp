import express from 'express'

import AuthRoutes from './auth.route.js'
import MessageRoutes from './message.route.js'
import UserRouter from './user.route.js'

const router = express.Router()

router.use('/auth',AuthRoutes)
router.use('/message',MessageRoutes)
router.use('/user',UserRouter)


export default router