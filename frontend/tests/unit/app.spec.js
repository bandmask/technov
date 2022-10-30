import { mount } from '@vue/test-utils'
import { RouterLink, RouterView } from 'vue-router'

import appComponent from '@/app.vue'
import footerComponent from '@/modules/footer/appFooter.vue'

describe('app', () => {
  let app = null;
  const currentOrientationText = 'test orientation'
  const appName = 'test appName'

  beforeEach(() => {
    app = mount(appComponent, {
      global: {
        provide: {
          mq: {
            current: currentOrientationText
          },
          $appName: appName
        },
        stubs: ['router-link', 'router-view']
      }
    })
  })

  afterEach(() => {
    app = null
  })

  it('should render', () => {
    expect(app).not.toBe(null)
  })

  it('should contain main div with app id', () => {
    expect(app.find('#app').exists()).toBe(true);
  })

  it('should contain nav', () => {
    const nav = app.find('#nav')

    expect(nav.exists()).toBe(true);

    let routes = nav.findAllComponents(RouterLink)

    expect(routes).not.toBeNull()
    expect(routes.length).toBe(2)
  })

  it('should contain main router view', () => {
    const routerView = app.findComponent(RouterView)

    expect(routerView.exists()).toBe(true)
  })

  it('should contain footer', () => {
    const footer = app.findComponent(footerComponent)

    expect(footer.exists()).toBe(true)
    expect(footer.text()).toMatch(`© ${appName} ${new Date().getFullYear()}`)
  })

  it('should print current orientation', () => {
    const orientation = app.find('.orientation')

    expect(orientation.exists()).toBe(true)
    expect(orientation.text()).toMatch(`orientation: ${currentOrientationText}`)
  })
})