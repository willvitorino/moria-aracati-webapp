import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/radio'
  },
  {
    path: '/radio',
    name: 'radio',
    component: () => import('../views/Audio.vue')
  },
  {
    path: '/tv',
    name: 'tv',
    component: () => import('../views/Video.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
