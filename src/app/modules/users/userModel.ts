import { Model, Schema, model } from 'mongoose'
import { IUser } from './userInterface'

type UserModelType = Model<IUser, object>

const userSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const UserModel = model<IUser, UserModelType>('User', userSchema)
export default UserModel
