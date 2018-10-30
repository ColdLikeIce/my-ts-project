import { ActionTree } from 'vuex'
import fetch from '../config/fetch'
const actions: ActionTree<any, any> = {
  // // 获取modules
  // setLogin({ state, commit }, flag: boolean): void {
  //   commit(TYPES.SET_LOGIN_STATUS, flag)
  // }
  getHeaderMenusInfo({ state, commit }, NodeCode: any) {
    const paramData = {
      PostData: JSON.stringify({
        ActionName: 'GetHeaderMenusInfo',
        NodeCode: NodeCode
      })
    }
    return new Promise((resolve, reject) => {
      fetch('/Navigation/OnAction', paramData, 'post').then((data: any) => {
        resolve(data)
      }).catch(error => {
        resolve(error)
      })
    })
  },
  /**
 * 登录
 */
  login({ state, commit }, param: any) {
    const paramData = {
      mobile: param.mobile,
      engineCode: param.engineCode,
      clusterTokenId: param.clusterTokenId
    }
    return new Promise((resolve, reject) => {
      fetch('/login/LoginByMobile', paramData, 'post').then((data: any) => {
        resolve(data)
      }).catch(error => {
        resolve(error)
      })
    })
  },
  getLeftMenusInfo({ state, commit }, NodeCode: any) {
    const paramData = {
      PostData: JSON.stringify({
        ActionName: 'GetLeftMenusInfo',
        NodeCode: NodeCode
      })
    }
    return new Promise((resolve, reject) => {
      fetch('/Navigation/OnAction', paramData, 'post').then((data: any) => {
        resolve(data)
      }).catch(error => {
        resolve(error)
      })
    })
  },
}

export default actions
