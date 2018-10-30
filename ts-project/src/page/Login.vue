<template>
  <div id="app">
        <div class="container">
            <div class="wrapper">
                <div class="item">
                    <!-- <input type="button" value="文瑶" @click="loginByDingtalkAcctount()" /-->
                    <div><input v-model="mobile"/></div>
                    <div><input v-model="engineCode"/></div>
                    <div><input v-model="tokenId"/></div>
                    <button  @click="login">登录</button>
                    <div class="loginstatus">{{isLogin}}</div>
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
// import { login } from '../service/getData'
// import { loginByDingtalkAccount, loginByDingId } from '../service/getData'

@Component({
  name: 'Login'
})
export default class Login extends Vue {
  mobile : string = '18826222483'
  engineCode:string = 'h3qe02nigsroejwdgggfutzi4'
  tokenId:string = '1'
  isLogin: string = 'false'
  async login () {
    // this.isLogin = 'true'
    const paramData = {
      mobile: this.mobile,
      engineCode: this.engineCode,
      clusterTokenId: this.tokenId
    }
    const that = this
    this.$store.dispatch('login', paramData)
    .then(data => {
      if (data.Result) {
        that.isLogin = 'true'
        alert('登录成功,欢迎：' + data.UserName + '----准备跳转!')
        that.$router.push({ path: '/index' })
      }
    })
  }
}
</script>
<style lang="less" scoped>
.item{
  div{
    margin: 13px;
  }
}
</style>

