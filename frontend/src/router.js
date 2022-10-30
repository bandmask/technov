import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/gallery',
      name: 'galleryModule',
      component: () => import('@/modules/galleryModule/galleryModule.vue')
    }
  ]
})

export default router
