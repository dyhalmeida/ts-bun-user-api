import { IUser } from "../model/user.interface"

export interface IUserRepository {
  list(): Promise<IUser[]>
  findByEmail(email: string): Promise<IUser | null>
  create(user: IUser): Promise<IUser>
}
