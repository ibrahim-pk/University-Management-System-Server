import mongoose from 'mongoose'
import app from './app'
import dotenv from 'dotenv'
dotenv.config()

const Main = async () => {
  await mongoose.connect(process.env.BD_URL as string)
  try {
    console.log('DB Connected!')
    app.listen(process.env.PORT, () => {
      console.log('server is running')
    })
  } catch (err) {
    console.log(err)
  }
}

Main()
