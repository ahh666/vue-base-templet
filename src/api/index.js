import BaseApi from './base'

class Api extends BaseApi {
  getArticles() {
    return this.get('/getArticles')
  }
}

export default new Api()
