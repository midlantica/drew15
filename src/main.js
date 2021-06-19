// /* eslint-disable prettier/prettier */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import VTooltip from 'v-tooltip'

createApp(App).use(VTooltip).use(router).mount('#app')
