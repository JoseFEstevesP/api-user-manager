import { Router } from "express";
const userRoutes = Router()
userRoutes.post('/register')
userRoutes.post('/login')
userRoutes.get('/profile')
userRoutes.patch('/update-data')
userRoutes.patch('/update-email')
userRoutes.patch('/update-password')
export default userRoutes