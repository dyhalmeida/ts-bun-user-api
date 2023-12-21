import { IUsecase } from "../../shared/use-case.interface";
import { IUser } from "../model/user.interface";
import { IUserRepository } from "./user-repository.interface";

export class ListUser implements IUsecase<void, IUser[]> {

  constructor(readonly repository: IUserRepository) {}

  async execute(): Promise<IUser[]> {
    return await this.repository.list()
  }



}