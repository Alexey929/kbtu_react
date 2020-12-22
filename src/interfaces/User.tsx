import { PublicationInterface } from './Publications'

export interface UserInterface {
  id: string | number,
  nickname: string,
  email: string,
  password: string,
  publications?: PublicationInterface[],
  shortAbout?: string,
  rating?: {
    dislikes: string,
    likes: string,
  },
  numberOfSubscriptions?: number,
  numberOfSubscribers?: number,
}
