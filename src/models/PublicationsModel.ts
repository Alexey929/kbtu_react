import { makeAutoObservable } from 'mobx'

class PublicationsModel {
  publications = []

  constructor() {
    makeAutoObservable(this)
  }
}

export default new PublicationsModel()
