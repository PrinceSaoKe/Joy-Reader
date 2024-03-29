import { BaseModel } from "./base";

export class LoginModel {
  readonly base: BaseModel
  readonly data: _LoginData

  constructor(res: any) {
    this.base = new BaseModel(res)
    this.data = {
      avatarUrl: res.data?.avatarUrl,
    }
  }
}

interface _LoginData {
  avatarUrl: string
}