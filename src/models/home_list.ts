import { BaseModel } from "./base";
import { BlogModel } from "./blog";

export class HomeListModel {
  readonly base: BaseModel
  readonly totalPages: number = 0
  readonly data: BlogModel[] = []

  constructor(res: any) {
    this.base = new BaseModel(res)
    if (res.data == null) return
    this.totalPages = res.data.totalPages
    for (let i = 0; i < res.data.articles.length; i++) {
      this.data.push(new BlogModel(res.data.articles[i]))
    }
  }
}