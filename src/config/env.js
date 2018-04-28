/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl = ''
let routerMode = 'hash'
let imgBaseUrl
let version
let deviceInfo
let source
let sellerBn

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://192.168.2.160:8081/sellerpok/index.php/openapi/promotion_route/accept'
  imgBaseUrl = 'http://192.168.2.160:8081/sellerpok/index.php/openapi/promotion_route/accept'
  version = '1.0.0'
  deviceInfo = '1212121212121212'
  source = 'h5'
  sellerBn = '99904081602434'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://192.168.2.160:8081/sellerpok/index.php/openapi/promotion_route/accept'
  imgBaseUrl = 'http://192.168.2.160:8081/sellerpok/index.php/openapi/promotion_route/accept'
  version = '1.0.0'
  deviceInfo = '1212121212121212'
  source = 'h5'
  sellerBn = '99904081602434'
}

export {
  baseUrl,
  routerMode,
  imgBaseUrl,
  version,
  deviceInfo,
  source,
  sellerBn
}
