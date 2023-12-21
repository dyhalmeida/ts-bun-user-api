import { IUser } from "../../../core/user/model/user.interface";
import { IUserRepository } from "../../../core/user/usecases/user-repository.interface";

export class UserRepositoryMemmory implements IUserRepository {
  
  private readonly user: IUser[] = []

  async findByEmail(email: string): Promise<IUser | null> {
    return this.user.find(user => user.email === email) ?? null
  }
  async create(user: IUser): Promise<IUser> {
    const data = {
      id: Date.now(),
      ...user
    }
    this.user.push(data)
    return data
  }

  async list(): Promise<IUser[]> {
    return this.user
  }

}