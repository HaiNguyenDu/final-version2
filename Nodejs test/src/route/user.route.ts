import express from "express"
import { findUserByString, getListUser } from "../controller/user.comtroller.ts"
import { postcreateUser } from "../controller/user.comtroller.ts"
import checkTiket from "../middleware/checkTicket.ts"
const user_route = express.Router()


user_route.get('/get-All-Order',getListUser)
user_route.post('/create-Oder',postcreateUser)
user_route.post('/get-User',findUserByString)

export default user_route