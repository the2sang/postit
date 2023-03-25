export type PostsType = {
  title: string
  id: string
  createAt?: string
  comments?: {
    createAt: string
    id: string
    postId: string
    userId: string
  }[]
  user: {
    name: string
    image: string
  }
}