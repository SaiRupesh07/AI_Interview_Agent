import express from "express"
import isAuth from "../middlewears/isAuth.js"
import { createOrder, verifyPayment } from "../controller/payment.controller.js"

const paymentRouter = express.Router()

paymentRouter.post("/order" , isAuth , createOrder )
paymentRouter.post("/verify" , isAuth , verifyPayment )

export default paymentRouter