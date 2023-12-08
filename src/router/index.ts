import { createRouter, createWebHistory } from 'vue-router'
import nProgress from 'nprogress'
const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@view/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((_) => {
  nProgress.start()
})

router.afterEach(() => {
  nProgress.done()
})

export default router
