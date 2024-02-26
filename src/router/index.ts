import { createRouter, createWebHistory } from 'vue-router'
import nProgress from 'nprogress'

const routes = [
  {
    path: '/vue-template',
    name: 'index',
    component: () => import('@pages/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((_) => {
  nProgress.start()
})

router.afterEach(() => {
  nProgress.done()
})

export default router
