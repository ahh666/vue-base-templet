import BaseApi from './base'

const ERROR_CODE = {
  USER_TOKEN_NULL: 100000,
  NOT_LOGIN: 100001,
  LOGIN_FAILURE: 100002
}
class CustomUserApi extends BaseApi {
  async transfromResponse(res) {
    const { error_code, error_info } = res
    if (error_code !== 0) {
      console.log(error_info)
    }
    if (error_code === ERROR_CODE.LOGIN_FAILURE) {
      console.log('登录失效')
    }
    if (error_code === ERROR_CODE.NOT_LOGIN) {
      console.log('用户未登录')
    }
    return res
  }

  get(...args) {
    return super.get(...args).then(this.transfromResponse)
  }

  post(...args) {
    args[1] = JSON.stringify(args[1])
    return super.post(...args).then(this.transfromResponse)
  }
}

export default CustomUserApi
