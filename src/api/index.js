import BaseApi from './base'
import CustomUserApi from './customUserApi'
// import store from '@/store'

class Api {
  constructor(baseHandler, userHandler) {
    this.baseHandler = baseHandler
    this.userHandler = userHandler
  }

  getArticles() {
    return this.baseHandler.get('/getArticles')
  }

  getUserInfo(params) {
    return this.userHandler.post('/getUserInfo', params)
  }
}

export default new Api(new BaseApi(), new CustomUserApi())
