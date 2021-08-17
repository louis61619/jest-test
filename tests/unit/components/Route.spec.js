import { shallowMount, flushPromises, RouterLinkStub } from '@vue/test-utils'
import Route from '@/components/Route.vue'

describe('HelloWorld.vue', () => {
  let $route
  let $router
  beforeEach(() => {
    $route = {
      query: {}
    }
    $router = {
      replace: jest.fn()
    }
  })
  it('no passed $route.query.id', async () => {
    await flushPromises()
    const wrapper = shallowMount(Route, {
      global: {
        mocks: {
          $route
        }
      }
    })
    expect(wrapper.text()).toContain('need passed id')
  })
  it('passed $route.query.id', async () => {
    $route.query.id = 123
    await flushPromises()
    const wrapper = shallowMount(Route, {
      global: {
        mocks: {
          $route
        }
      }
    })
    expect(wrapper.text()).toContain('get detail')
  })

  it('replace to home', async () => {
    const wrapper = shallowMount(Route, {
      global: {
        mocks: {
          $route,
          $router
        }
      }
    })
    await wrapper.find('button').trigger('click')
    expect($router.replace).toHaveBeenCalled()
  })

  it('render router link', () => {
    const wrapper = shallowMount(Route, {
      global: {
        mocks: {
          $route,
          $router
        },
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })

    // 判斷router-link組件中有傳入to屬性
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/home')
  })
})
