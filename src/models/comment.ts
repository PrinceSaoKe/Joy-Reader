export class CommentModel {
  readonly commentId: string
  readonly userId: string
  readonly userName: string
  readonly content: string
  readonly createTime: Date
  readonly likes: number
  readonly level: number
  readonly avatarUrl: string
  readonly subComments: CommentModel[]

  constructor(res: any) {
    this.commentId = res.commentId
    this.userId = res.userId
    this.userName = res.userName
    this.content = res.content
    this.createTime = res.createTime
    this.likes = res.likes
    this.level = res.level
    this.avatarUrl = res.avatarUrl
    this.subComments = res.subComments
  }
}