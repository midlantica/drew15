// /* eslint-disable prettier/prettier */
import { createApp } from 'vue'
import App from './App'
import router from './router.js'
// import {createPinia} from 'pinia'

const app = createApp(App)
// app.use(createPinia())
app.use(router)
app.mount('#app')
