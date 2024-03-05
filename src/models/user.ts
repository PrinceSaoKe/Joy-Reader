import { BaseModel } from "./base";

export class UserModel {
  readonly base: BaseModel
  readonly data: _LoginData

  constructor(res: any) {
    this.base = new BaseModel(res)
    this.data = {
      userId: res.data?.userId,
      username: res.data?.username,
      avatarUrl: res.data?.avatarUrl,
    }
  }
}

interface _LoginData {
  userId: string
  username: string
  avatarUrl: string
}