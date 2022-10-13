import express from 'express'
import { getAllUser } from '../controller/user_ctl.js'

const router = new express.Router()
router.get('./user', getAllUser)

export default router