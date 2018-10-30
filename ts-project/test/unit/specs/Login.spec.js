// import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Login from '@/page/Login'

describe('Login.vue', () => {
  let LoginPage = shallowMount(Login)
  it('should render correct contents', () => {
    LoginPage.vm.mobile = '18826222483'
    LoginPage.vm.engineCode = 'h3qe02nigsroejwdgggfutzi4'
    LoginPage.vm.tokenId = '1'
    const button = LoginPage.vm.$el.querySelector('button')
    const clickEvent = new window.Event('click')
    LoginPage.vm._watcher.run()
    button.dispatchEvent(clickEvent)
    // LoginPage.vm.$nextTick(() => {
    //   expect(LoginPage.vm.isLogin).toBe('true')
    // })
    window.setTimeout(() => {
      expect(LoginPage.vm.isLogin).toBe('true')
    }, 1000)
    // const Constructor = Vue.extend(Login)
    // const vm = new Constructor().$mount()
    // vm.mobile = '18826222483'
    // vm.engineCode = 'h3qe02nigsroejwdgggfutzi4'
    // vm.tokenId = '1'
    // const button = vm.$el.querySelector('button')
    // const clickEvent = new window.Event('click')
    // vm._watcher.run()
    // button.dispatchEvent(clickEvent)
    // Vue.nextTick(() => {
    //   expect(vm.isLogin)
    //   .toEqual('')
    // })
    // expect(vm.mobile).to.equal('18826222483')
    // expect(vm.$el.querySelector('.hello h1').textContent)
    // .toEqual('Welcome to Your Vue.js App')
  })
})
