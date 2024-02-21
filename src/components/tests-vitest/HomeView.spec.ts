import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

describe('Home Page', () => {
  it('renders properly when accessing a non-existent route', async () => {
    const router = createRouter({
        history: createWebHistory(),
        routes: [
          {
            path: '/',
            name: 'home',
            component: HomeView
          },
          {
            path: '/:catchAll(.*)',
            redirect: { name: 'home' }
          }
        ]
      })

    const wrapper = mount(HomeView, {
      global: {
        plugins: [router]
      }
    })

    await router.push('/non-existent-route')

    expect(wrapper.find('.title').text()).toContain('75-DAY?');
 })
})

