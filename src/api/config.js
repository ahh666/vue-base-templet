const env = process.env.NODE_ENV

const config = {
  development: {
    baseUrl: 'http://127.0.0.1:8100',
  },
  production: {
    baseUrl: 'https://prod.cn',
  },
}

export default config[env]
