import { PrismaClient } from '@prisma/client'
import { IUser } from "../../../core/user/model/user.interface";
import { IUserRepository } from "../../../core/user/usecases/user-repository.interface";

export class UserRepositoryPrismaPg implements IUserRepository {

  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }
 
  findByEmail(email: string): Promise<IUser | null> {
    return this.prisma.user.findUnique({
      where: { 
        email ,
      },
    })
  }
  create(user: IUser): Promise<IUser> {
    return this.prisma.user.create({ data: user })
  }

  list(): Promise<IUser[]> {
    return this.prisma.user.findMany()
  }

}