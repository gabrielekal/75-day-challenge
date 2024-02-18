import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import NotFoundView from '@/views/404View.vue'

describe('404 Page', () => {
  it('renders properly when accessing a non-existent route', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/non-existent-route',
          component: NotFoundView
        }
      ]
    })

    const wrapper = mount(NotFoundView, {
      global: {
        plugins: [router]
      }
    })

    await router.push('/non-existent-route')

    expect(wrapper.find('h1').text()).toContain('404 Page Not Found')
  })
})
