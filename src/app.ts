import express from "express"
import cors from "cors"
const app=express()
//cors
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('Hi Server!')
})

export default app;
