import axios from 'axios'
import apiConfig from './config'

export default class BaseApi {
  constructor() {
    this.handler = axios.create()
    this.handler.defaults.baseURL = apiConfig.baseUrl
  }

  _transfromResponse(res) {
    const { data, status } = res
    if (status === 200) {
      return data
    }
    return res
  }

  get(url, config = {}) {
    // 防止 get请求缓存
    const now = `${Date.now()}`
    let _url = url
    if (config.params) {
      config.params[now] = now
    } else {
      const hasParams = url.includes('?')
      _url = `${url + (hasParams ? '&' : '?')}${now}=${now}`
    }
    return this.handler.get(_url, config).then(this._transfromResponse)
  }

  post(url, data, config) {
    return this.handler.post(url, data, config).then(this._transfromResponse)
  }
}
