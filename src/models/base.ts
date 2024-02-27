export class BaseModel {
  readonly code: number
  readonly message: string

  constructor(res: any) {
    this.code = res.base.code
    this.message = res.base.message
  }
}