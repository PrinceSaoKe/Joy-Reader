import { BaseModel } from "./base";

export class LoginModel {
  readonly base: BaseModel
  readonly data: LoginData

  constructor(res: any) {
    this.base = new BaseModel(res)
    this.data = {
      username: res.data?.username,
      avatarUrl: res.data?.avatarUrl,
      token: res.data?.token,
    }
  }
}

interface LoginData {
  username: string
  avatarUrl: string
  token: string
}