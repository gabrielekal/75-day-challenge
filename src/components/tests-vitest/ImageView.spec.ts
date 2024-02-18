import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import ImagePage from '@/views/ImageView.vue'
import BackArrow from '@/components/BackArrow.vue'

describe('Image Library Page', () => {
  it('renders properly with "WORK IN PROGRESS" message', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/imagelibrary',
          component: ImagePage
        }
      ]
    })

    const wrapper = mount(ImagePage, {
      global: {
        plugins: [router]
      }
    })

    await router.push('/imagelibrary')

    expect(wrapper.find('h1').text()).toContain('WORK IN PROGRESS 📷')
    expect(wrapper.find('p').text()).toContain('Your exciting photo library will launch soon, as it is currently under construction. Please check back later.')
  })

  it('renders the BackArrow component', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/imagelibrary',
          component: ImagePage
        }
      ]
    })

    const wrapper = mount(ImagePage, {
      global: {
        plugins: [router]
      }
    })

    await router.push('/imagelibrary')

    expect(wrapper.findComponent(BackArrow).exists()).toBe(true)
  })
})
