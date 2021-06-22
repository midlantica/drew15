// /* eslint-disable prettier/prettier */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

import Popper from 'vue3-popper'
// import 'vue-popperjs/dist/vue-popper.css'

createApp(App).use(Popper).use(router).mount('#app')
