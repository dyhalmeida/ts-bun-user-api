import { IUsecase } from "../../shared/use-case.interface";
import { IUserRepository } from "./user-repository.interface";

type Input = {
  name: string
  email: string
  password: string
}

export class CreateUser implements IUsecase<Input, void> {

  constructor(private readonly userRepository: IUserRepository){}

  async execute(input: Input): Promise<void> {
    const { name, email, password } = input
    const userFound = await this.userRepository.findByEmail(email)
    if (userFound) {
      throw new Error('user already exists')
    }
    await this.userRepository.create({ name, email, password })
  }

}
