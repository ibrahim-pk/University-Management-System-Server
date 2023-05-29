import mongoose from "mongoose";
import app from "./app";
const PORT=5000;
const Main=async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    try{
       console.log('DB Connected!')
       app.listen(PORT,()=>{
        console.log('server is running')
    })
    }catch(err){
        console.log(err)
    }
}

Main()