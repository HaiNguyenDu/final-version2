import User from "../model/user.model.ts";

interface user {
    name:string,
    phone:string
}
export const getAllUser = async ()=>{
    try {
        const user = await User.find().select("-_id")
        return user   
    } catch (error) {
        console.log(error)
    }
}
export const createUser = async (order)=>{
    try {
        const newUser = new User({
            addwc:order.addwc,
            addc:order.addc,
            quality:order.quality,
            price:order.price,
            status:order.status
        })
        const createUser = await newUser.save()
        return createUser
    } catch (error) {
        console.log(error)
    }
}
export const getUSer= async (find:string)=>{
    try {
        if(!find)
            return console.log("ko cos ki tu")
        else 
        {
        const listuser:user[]= await User.find({name:{ $regex:find, $options:'i'}})
        return listuser
        }
    } catch (error) {
        console.log(error)
    }
}