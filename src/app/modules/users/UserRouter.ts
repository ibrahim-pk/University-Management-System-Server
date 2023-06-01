import express, { Request, Response } from 'express'
import UserModel from './userModel'
const userRouter = express.Router()

userRouter.get('/', async (req: Request, res: Response) => {
  const users = await UserModel.find()
  res.status(200).send(users)
})

userRouter.post('/add', async (req: Request, res: Response) => {
  try {
    const { id, password, role } = req.body
    //console.log(req.body)
    const user = new UserModel({
      id: id,
      password: password,
      role: role,
    })
    const saveUser = await user.save()
    res.status(200).json({
      user: saveUser,
      success: true,
      msg: 'Added',
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      msg: 'Added fail',
      error: err,
    })
  }
})

export default userRouter
