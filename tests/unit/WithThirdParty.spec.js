import { shallowMount } from '@vue/test-utils'
import WithThirdParty from '@/components/WithThirdParty.vue'
import { createStore } from 'vuex'
// import Router from 'vue-router'
// vue3中沒有createLocalVue
// const localVue = createLocalVue()

// localVue.use(Router)

// localVue.use(
//   createStore({
//     state: {
//       name: 'Louis'
//     },
//     mutations: {},
//     actions: {},
//     modules: {}
//   })
// )

const store = createStore({
  state() {
    return { name: 'Louis' }
  }
})

describe('WithThirdParty', () => {
  it('use localVue', () => {
    const wrapper = shallowMount(WithThirdParty, {
      global: {
        plugins: [store]
      }
    })
    expect(wrapper.find('div').text()).toBe('Louis')
  })
})
