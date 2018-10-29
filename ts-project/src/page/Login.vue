<template>
  <div id="app">
        <div class="container">
            <div class="wrapper">
                <div class="item">
                    <!-- <input type="button" value="文瑶" @click="loginByDingtalkAcctount()" /-->
                    <button  @click="login(0)">登录</button>
                    <!--<button  @click="login(2)">customer</button> &ndash;&gt;-->
                    <!-- <button  @click="loginByDingtalkAcctount()">mf</button> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { login } from '../service/getData'
// import { loginByDingtalkAccount, loginByDingId } from '../service/getData'

@Component({
  name: 'Login'
})
export default class Login extends Vue {
  mobile : string = '18826222483'
  engineCode:string = 'h3qe02nigsroejwdgggfutzi4'
  async login (index:number) {
    let los=[
        // {
        //     mobile: '18816854543',
        //     engineCode: 'hkvahvi2mau4d93l'
        // },
      {
        dingid: '$:LWCP_v1:$pd7NlYvhP4eO2ClC132O8Q==',
        engineCode: 'z0uw0bgri8rervg7eolw42ka6'
      }
    ]
    // let log=los[index];
    debugger
    let res = await login(this.mobile, this.engineCode, '1');
    // let res = await loginByDingtalkAcctount(log.dingTalkAccount, log.engineCode, '1');
    // let res = await loginByDingId(log.dingid, log.engineCode, '1');
    if (res.Result) {
      // 登录成功，测试请求
      alert('登录成功,欢迎：' + res.UserName + '----准备跳转!')
      this.$router.push({ path: '/index' })
      // window.location.href = "/back-index.html";
    }
  }
}
</script>