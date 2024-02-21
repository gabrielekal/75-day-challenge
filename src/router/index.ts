import { createRouter, createWebHistory } from 'vue-router'
import SoftChallengeView from '@/views/SoftChallengeView.vue'
import DayView from '@/views/DayView.vue'
import RulesView from '@/views/RulesView.vue'
import Home from '@/views/HomeView.vue'
import Progress from '@/views/75DayView.vue'
import About from '@/views/AboutView.vue'
import WeightPage from '@/views/WeightPage.vue'
import ImagePage from "@/views/ImageView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/rules',
      name: 'rules',
      component: RulesView
    },
    {
      path: '/challenge',
      name: 'challenge',
      component: SoftChallengeView
    },
    {
      path: '/day/:day',
      name: 'DayView',
      component: DayView,
      props: true,
    },
    {
      path: '/progress',
      name: 'progress',
      component: Progress,
    },
    {
      path: '/weight',
      name: 'weight',
      component: WeightPage,
    },
    {
      path: '/imagelibrary',
      name: 'image',
      component: ImagePage,
    },
    {
      path: "/:catchall(.*)*",
      redirect: { name: 'home' }
    }
  ]
})

export default router
