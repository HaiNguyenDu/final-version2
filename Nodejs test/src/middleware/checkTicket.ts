
import {Request,Response} from "express"

const checkTicket = (req:Request,res:Response,next)=>{
    const ticket:any = req.query.ticket
    if(ticket)
    {
        next()
    }
    else
    res.status(401).json({messsage:"Cant auth"})
}


export default checkTicket