import * as vueRouter from 'vue-router'
import Home from './views/HomeView.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: () => import('./views/AboutView.vue')
  }
]

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes
})

export default router
