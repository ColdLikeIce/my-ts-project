import fetch from '../config/fetch'
/**
 * 登录
 */
export const login = (mobile, engineCode, clusterTokenId) => {
  let paramData = {
    mobile: mobile,
    engineCode: engineCode,
    clusterTokenId: clusterTokenId
  }
  return fetch('/login/LoginByMobile', paramData)
}
export const GetEngineCode = (Code, time) => {
  let paramData = {
    ActionName: 'LoadView',
    QueryCode: Code,
    TimeStamp: time
  }
  return fetch('/App/OnAction', {
    PostData: JSON.stringify(paramData)
  }, 'POST')
}
export const GetHeaderMenusInfo = (NodeCode) => {
  let paramData = {
    ActionName: 'GetHeaderMenusInfo',
    NodeCode: NodeCode
  }
  return fetch('/Navigation/OnAction', {
    PostData: JSON.stringify(paramData)
  }, 'POST')
}
