import { Schema,Model,model } from "mongoose";
import { type } from "os";


interface Order{
    addwc:boolean,
    addc:boolean,
    quality:number,
    price:number,
    status:string
}


const orderSchema:Schema<Order> = new Schema({

    addwc:{
        type:Boolean,
        require:true,
    },
    addc:{
        type:Boolean,
        require:true,
    },
    quality:{
        type:Number
    },
    price:{
        type:Number
    },
    status:{
        type:String
    }

})

const User:Model<Order> = model<Order>('order',orderSchema)

export default User