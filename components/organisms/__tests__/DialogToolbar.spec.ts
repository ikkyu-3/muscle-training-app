import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import DialogToolbar from '@/components/organisms/DialogToolbar.vue'

const options = {
  localVue: createLocalVue(),
  vuetify: new Vuetify()
}

describe('organisms/DialogToolbar.vue', () => {
  it('snapshot', () => {
    const wrapper = mount(DialogToolbar, {
      ...options,
      propsData: {
        arrowButtonClick: () => {},
        clearButtonClick: () => {}
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Arrowボタンをクリックすると、arroLeftClickに渡した関数が実行される', () => {
    const click = jest.fn()
    const wrapper = mount(DialogToolbar, {
      ...options,
      propsData: {
        arrowButtonClick: click,
        clearButtonClick: () => {}
      }
    })
    const button = wrapper.findAll('button').at(0)
    button.trigger('click')
    expect(click).toHaveBeenCalled()
  })

  it('Clearボタンをクリックすると、clearClickに渡した関数が実行される', () => {
    const click = jest.fn()
    const wrapper = mount(DialogToolbar, {
      ...options,
      propsData: {
        arrowButtonClick: () => {},
        clearButtonClick: click
      }
    })
    const button = wrapper.findAll('button').at(1)
    button.trigger('click')
    expect(click).toHaveBeenCalled()
  })
})