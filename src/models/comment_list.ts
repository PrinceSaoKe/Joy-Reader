import { BaseModel } from "./base";
import { CommentModel } from "./comment";

export class CommentListModel {
  readonly base: BaseModel
  readonly data: CommentModel[] = []

  constructor(res: any) {
    this.base = new BaseModel(res)
    if (res.data == null) return
    for (let i = 0; i < res.data.length; i++) {
      this.data.push(new CommentModel(res.data[i]))
    }
  }
}