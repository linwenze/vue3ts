import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../pages/index.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../pages/about.vue'),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router