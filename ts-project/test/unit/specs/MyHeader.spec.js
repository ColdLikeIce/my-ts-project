// import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import myheader from '@/components/myheader'

describe('Login.vue', () => {
  let headerPage = shallowMount(myheader)
  it('should render correct contents', () => {
    headerPage.vm.NodeCode = 'D000131detretrt'
    // LoginPage.vm.engineCode = 'h3qe02nigsroejwdgggfutzi4'
    // LoginPage.vm.tokenId = '1'
    // const button = LoginPage.vm.$el.querySelector('button')
    // const clickEvent = new window.Event('click')
    // LoginPage.vm._watcher.run()
    // button.dispatchEvent(clickEvent)
    window.setTimeout(() => {
      expect(headerPage.vm.GetHeaderMenusInfo()).toBe('true')
    }, 1000)
  })
})
