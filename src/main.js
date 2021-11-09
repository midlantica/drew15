// /* eslint-disable prettier/prettier */
// @ts-nocheck
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
// import {createPinia} from 'pinia'

const app = createApp(App)
// app.use(createPinia())
app.use(router)
app.mount('#app')
