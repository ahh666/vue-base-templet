import axios from 'axios'
import apiConfig from './config'

export default class BaseApi {
  constructor() {
    this.handler = axios.create()
    this.handler.defaults.baseURL = apiConfig.baseUrl
  }

  static _transfromResponse(res) {
    const { data, status } = res
    if (status === 200) {
      return data
    }
    return res
  }

  get(url, config) {
    return this.handler.get(url, config).then(this._transfromResponse)
  }

  post(url, data, config) {
    return this.handler.post(url, data, config).then(this._transfromResponse)
  }
}
