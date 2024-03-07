export class BlogModel {
  readonly blogId: string
  readonly authorId: string
  readonly authorName: string
  readonly authorAvatarUrl: string
  readonly title: string
  readonly desc: string
  readonly content: string
  readonly createTime: Date
  readonly likes: number
  readonly clicks: number

  constructor(res: any) {
    this.blogId = res.articleId
    this.authorId = res.authorId
    this.authorName = res.authorName
    this.authorAvatarUrl = res.authorAvatarUrl
    this.title = res.title
    this.desc = res.desc
    this.content = res.content
    this.createTime = res.createTime
    this.likes = res.likes
    this.clicks = res.clicks
  }
}