import { createRouter, createWebHistory } from 'vue-router'
import nProgress from 'nprogress'

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('@pages/index.vue'),
    },
]

const createRoutes = () => {
    if (import.meta.env.PROD) {
        return routes.map((route) => {
            route.path = `/${import.meta.env.VITE_APP_NAME}${route.path}`
        })
    }
}
createRoutes()
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
