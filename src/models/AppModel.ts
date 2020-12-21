import { makeAutoObservable, configure } from 'mobx'

configure({ enforceActions: 'observed' })

class AppModel {
  isLoading = false

  constructor() {
    makeAutoObservable(this)
  }

  setLoading() {
    this.isLoading = true
  }
}

export default new AppModel()
