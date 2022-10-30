import { shallowMount } from '@vue/test-utils'
import example from '@/components/exampleComponent.vue'

describe('exampleComponent', () => {
  it('renders greeting message', () => {
    const greetingText = 'I am an example component'

    const wrapper = shallowMount(example)
    const greeting = wrapper.find('.greeting')

    expect(greeting.text()).toMatch(greetingText)
  })

  it('should have data count of one', () => {
    const wrapper = shallowMount(example)

    expect(wrapper.vm.$data).not.toBeNull()
    expect(wrapper.vm.$data.count).toBe(1)
  })

  it('should render image', () => {
    const wrapper = shallowMount(example)
    const img = wrapper.find('img')
    
    expect(img).not.toBeNull()
    expect(img.attributes('alt')).toMatch('assets-logo')
  })

  describe('when clicking button', () => {
    it('should increment', () => {
      const wrapper = shallowMount(example)
      const button = wrapper.find('button')

      button.trigger('click')

      expect(wrapper.vm.$data).not.toBeNull()
      expect(wrapper.vm.$data.count).toBe(2)
    })

    it('should fall back to zero', () => {
      const wrapper = shallowMount(example)
      const button = wrapper.find('button')


      expect(wrapper.vm.$data).not.toBeNull()
      expect(wrapper.vm.$data.count).toBe(1)

      for (let i = 1; i < 9; i++) {
        button.trigger('click')
        expect(wrapper.vm.$data.count).toBe(i + 1)
      }

      // last click should fallback to zero - mod
      button.trigger('click')
      expect(wrapper.vm.$data.count).toBe(0)
    })
  })
})
