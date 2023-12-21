import Elysia from "elysia";
import { CreateUser } from "../../core/user/usecases/create-user";

export class CreateUserController {
  constructor(readonly server: Elysia, readonly usecase: CreateUser){
    this.server.post('/user', async ({ body }) => {
      const { name, email, password } = body as any
      await this.usecase.execute({ name, email, password })
      return {
        body: {
          message: 'user created successfully'
        }
      }
    })
  }
}