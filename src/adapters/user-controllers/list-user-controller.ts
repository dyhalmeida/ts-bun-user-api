import Elysia from "elysia";
import { ListUser } from "../../core/user/usecases/list-user";

export class ListUserController {
  constructor(readonly server: Elysia, readonly usecase: ListUser){
    this.server.get('/user', async () => {
      return await this.usecase.execute()
    })
  }
}