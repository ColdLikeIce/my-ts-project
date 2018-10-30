import { shallowMount } from '@vue/test-utils'
import List from '@/page/AddItem'

describe('AddItem.vue', () => {
  let ListComponent = shallowMount(List)
  it('add a new item to list', () => {
    ListComponent.vm.newItem = 'new item'
    const button = ListComponent.vm.$el.querySelector('button')
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    ListComponent.vm._watcher.run()
    expect(ListComponent.vm.listItems).toContain('new item')
  })
  // it('adds a new item to list on click', () => {
  //   // build component
  //   const Constructor = Vue.extend(List)
  //   const ListComponent = new Constructor().$mount()

  //   // set input value
  //   ListComponent.newitem = 'brus2'
  //   // simulate click event
  //   const button = ListComponent.$el.querySelector('button')
  //   const clickEvent = new window.Event('click')
  //   button.dispatchEvent(clickEvent)
  //   ListComponent._watcher.run()
  //   // assert list contains new item
  //   // expect(ListComponent.$el.textContent).to.contain('brush my teeth')
  //   Vue.nextTick(() => {
  //     expect(ListComponent.listItems).toContain('brus321321321312321')
  //   })
  //   // expect(ListComponent.newItem).toBe('brush my teeth')
  // })
})
