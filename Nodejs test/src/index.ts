import express,{Response,Request} from "express"
import connectDb from "./model/database.ts"
import user_route from "./route/user.route.ts"
import bodyParser from 'body-parser'
const app = express()
const port:number = 3000


connectDb()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api/v1',user_route)
app.get('/',(req:Request,res:Response)=>{
    res.send("hello bro")
})

app.listen(port)