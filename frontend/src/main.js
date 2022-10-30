import { createApp } from 'vue'
import { Vue3Mq } from 'vue3-mq'

import app from './app.vue'

import router from './router.js'
import store from './store.js'
import media from './media.js'

createApp(app)
  .use(Vue3Mq, media)
  .use(router)
  .use(store)
  .provide('$appName', 'technov')
  .mount('#app')

router.replace('/gallery')