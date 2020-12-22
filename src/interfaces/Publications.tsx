export interface CommentInterface {
  author: {
    nickname: string,
    id: string | number
  },
  date: string,
  text: string,
  rating: {
    likes: string,
    dislikes: string,
  }
}

export interface PublicationInterface {
  id: string | number,
  title: string,
  author: {
    id: string | number,
    nickname: string,
  },
  previewText: string,
  mainText: string,
  rating: {
    dislikes: string,
    likes: string,
  }
  comments?: CommentInterface[]
}
