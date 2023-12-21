import { UserRepositoryMemmory } from "./external/db/memory/user-repository-memory";
import { CreateUser } from "./core/user/usecases/create-user";
import { CreateUserController } from "./adapters/user-controllers/create-user-controller";
// import { UserRepositoryPrismaPg } from "./external/db/prisma/user-repository-prisma-pg";
import { ListUser } from "./core/user/usecases/list-user";
import { ListUserController } from "./adapters/user-controllers/list-user-controller";

import app from "./external/api/config";


/** POST /user => create user */
const userRepositoryMemory = new UserRepositoryMemmory()
// const userRepositoryPrismaPg = new UserRepositoryPrismaPg()

const createUserUseCase = new CreateUser(userRepositoryMemory)
const listUserUseCase = new ListUser(userRepositoryMemory)
new CreateUserController(app, createUserUseCase)
new ListUserController(app, listUserUseCase)

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
