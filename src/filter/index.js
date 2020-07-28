// 全局过滤器
const formatStr = (str, num) => {
  if (str.length > num) {
    return `${str.substr(0, num)}...`
  }
  return str
}
export default { formatStr }
