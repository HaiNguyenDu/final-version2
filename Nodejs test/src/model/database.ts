import { promises } from "dns";
import mongoose from "mongoose";



const url:string = "mongodb+srv://NguyenDuyHai:%40NDH2k4@demo.nbwwo.mongodb.net/Order?retryWrites=true&w=majority&appName=Demo"

export const connectDb = async ():Promise<void>=>{
    try {
        await mongoose.connect(url)
        console.log("connect success")
    } catch (error) {
        console.log(error)        
    }
} 
export default connectDb