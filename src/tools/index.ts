export const isStr = (str: any): str is string => typeof str === 'string'
export const isNum = (num: any): num is number => typeof num === 'number'

export function toDay() {
  const d = new Date()
  let str = ''
  str += `${d.getFullYear()}年` // 获取当前年份
  str += `${d.getMonth() + 1}月` // 获取当前月份（0——11）
  str += `${d.getDate()}日`
  str += `${d.getHours()}时`
  str += `${d.getMinutes()}分`
  str += `${d.getSeconds()}秒`
  return str
}

/**
 * 判断进来的是否是一个空的对象
 * @param data
 */
export function isEmptyObj(data: any) {
  if (data && typeof data === 'object' && !Array.isArray(data))
    return Reflect.ownKeys(data).length === 0
  return true
}
