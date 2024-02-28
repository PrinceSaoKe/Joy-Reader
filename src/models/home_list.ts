import { BaseModel } from "./base";
import { BlogModel } from "./blog";

export class HomeListModel {
  readonly base: BaseModel
  readonly data: BlogModel[] = []

  constructor(res: any) {
    this.base = new BaseModel(res)
    if (res.data == null) return
    for (let i = 0; i < res.data.length; i++) {
      this.data.push(new BlogModel(res.data[i]))
    }
  }
}