import {
  baseUrl,
  version,
  deviceInfo,
  source,
  sellerBn
} from './env'

export default async (url = '', data = {}, type = 'GET') => {
  type = type.toUpperCase()
  url = baseUrl + url

  let requestData = {
    version: version,
    device_info: deviceInfo,
    source: source,
    method: data.method,
    seller_bn: sellerBn
  }

  Object.assign(requestData, data.params)

  requestData.sign_type = 'RSA'
  requestData.sign = '111111111111111111'

  if (type === 'GET') {
    let dataStr = '' // 数据拼接字符串
    Object.keys(requestData).forEach(key => {
      dataStr += key + '=' + data[key] + '&'
    })

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
  }
  return new Promise((resolve, reject) => {
    let requestObj
    if (window.XMLHttpRequest) {
      requestObj = new XMLHttpRequest()
    } else {
      requestObj = new ActiveXObject()
    }

    let sendData = ''
    if (type === 'POST') {
      sendData = JSON.stringify(requestData)
    }

    requestObj.open(type, url, true)
    requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    requestObj.send(sendData)

    requestObj.onreadystatechange = () => {
      if (requestObj.readyState === 4) {
        if (requestObj.status === 200) {
          let obj = requestObj.response
          if (typeof obj !== 'object') {
            obj = JSON.parse(obj)
          }
          resolve(obj)
        } else {
          reject(requestObj)
        }
      }
    }
  })
}
