import { BaseModel } from "./base";

export class LoginModel {
  readonly base: BaseModel
  readonly data: _LoginData

  constructor(res: any) {
    this.base = new BaseModel(res)
    this.data = {
      username: res.data?.username,
      avatarUrl: res.data?.avatarUrl,
    }
  }
}

interface _LoginData {
  username: string
  avatarUrl: string
}