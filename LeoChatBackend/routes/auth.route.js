import express from 'express'
import AuthController from '../controllers/auth.contoller.js'
const router = express.Router()


router.get('/test',AuthController.test)
router.post('/signup',AuthController.signUp)
router.post('/login',AuthController.logIn)
router.post('/logout',AuthController.logOut)


export default router