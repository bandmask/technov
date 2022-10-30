import { createRouter, createWebHistory } from 'vue-router'

import exampleComponent from '@/components/exampleComponent.vue'

const router = createRouter({
  history: createWebHistory(),
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: {
        props: ['test'],
        components: { exampleComponent },
        template: '<div><exampleComponent /></div>'
      }
    },
    {
      path: '/module',
      name: 'lazyModule',
      component: () => import('@/modules/lazyModule/lazyModule.vue')
    }
  ]
})

export default router
