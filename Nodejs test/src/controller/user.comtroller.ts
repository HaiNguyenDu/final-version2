import {Request,Response} from 'express'
import { createUser, getAllUser, getUSer } from '../service/user.service'

export const getListUser = async (req:Request,res:Response)=>{
    try {
        const listUser = await getAllUser()
        if(!listUser)
            res.status(400).send({message:"Fail to get all user"})
        else
            res.status(200).send({listUser})
    } catch (error) {
            res.status(400)
    }
}

interface Order{
    addwc:boolean,
    addc:boolean,
    quality:number,
    price:number,
    status:string
}
export const postcreateUser = async (req:Request,res:Response)=>{
    try {

        const {addwc,addc,quality,price,status} = req.body as {
            addwc:boolean,
            addc:boolean,
            quality:number,
            price:number,
            status:string
        }
     
        const newOrder:Order = {
            addwc:addwc,
            addc:addc,
            quality:quality,
            price:price,
            status:status
        }

        const creatUser = await createUser(newOrder)
        if(!creatUser)
            res.status(400).send({message:"Fail to creat user"})
        else
            res.status(200).send({creatUser})
    } catch (error) {
            res.status(400)
    }
} 

export const findUserByString = async (req:Request,res:Response)=>{
    try {
        const {find} = req.body as{
            find:string
        }
        if(!find)
        {
            
        }
        else{
            const listuser = await getUSer(find)
            res.status(200).json(listuser)
    }
    } catch (error) {
        res.status(400).send(error)
    }
}