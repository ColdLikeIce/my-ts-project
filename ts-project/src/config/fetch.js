import {
  baseUrl
} from './env'
import $ from 'jquery'
export default async (url = '', data = {}, type = 'GET', method = 'fetch', isAsync = true) => {
  type = type.toUpperCase()
  url = baseUrl + url
  return new Promise((resolve, reject) => {
    $.ajax({
      url: url,
      method: type,
      data: data,
      dataType: 'json',
      async: isAsync,
      success: function (response) {
        // if (!response.Logined) {
        //   window.location.href = '/Login/'
        // }
        let obj = response
        if (typeof obj !== 'object') {
          obj = JSON.parse(obj)
        }
        resolve(obj)
      },
      error: function (err) {
        if (err.responseJSON && err.responseJSON.ErrorMessage.indexOf('MetadataLocked') > -1) {
          // alert('系统正在进行更新，请不要关闭浏览器，更新完成后您可以继续设置。');
        }
        reject(err)
      }
    })
  })
}
