import { PublicationInterface } from './Publications'

export interface UserInterface {
  id: string | number,
  nickname: string,
  email: string,
  password: string,
  publications?: PublicationInterface[],
  shortAbout?: string,
  rating?: string,
  numberOfSubscriptions?: number,
  numberOfSubscribers?: number,
}
