import { BaseModel } from "./base";
import { BlogModel } from "./blog";

export class UploadBlogModel {
  readonly base: BaseModel
  readonly data: BlogModel | null = null

  constructor(res: any) {
    this.base = new BaseModel(res)
    if (res.data == null) return
    this.data = new BlogModel(res.data)
  }
}