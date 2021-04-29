/**参数number为毫秒时间戳，format为需要转换成的日期格式
 * @param {Object} number
 * @param {Object} format
 * 使用formatTime(1545903266795, 'Y年M月D日 h:m:s')或者formatTime(1545903266795, 'Y-M-D h:m:s')即可
 */
export function formatTime (number, format) {
  let time = new Date(number)
  let newArr = []
  let formatArr = ['Y', 'M', 'D', 'h', 'm', 's']
  newArr.push(time.getFullYear())
  newArr.push(formatNumber(time.getMonth() + 1))
  newArr.push(formatNumber(time.getDate()))

  newArr.push(formatNumber(time.getHours()))
  newArr.push(formatNumber(time.getMinutes()))
  newArr.push(formatNumber(time.getSeconds()))

  for (let i in newArr) {
    format = format.replace(formatArr[i], newArr[i])
  }
  return format;
}

/**格式化日期，如月、日、时、分、秒保证为2位数
 * @param {Object} n
 */
function formatNumber (n) {
  n = n.toString()
  return n[1] ? n : '0' + n;
}