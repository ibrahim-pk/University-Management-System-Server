import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/UserRouter'
const app: Application = express()
//cors
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//testing
app.get('/', (req: Request, res: Response) => {
  res.send('Hi Server!')
})
app.use('/api/users', userRouter)

export default app
