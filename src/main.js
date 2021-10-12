// /* eslint-disable prettier/prettier */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

// import Popper from 'vue3-popper'

createApp(App)
  // .use(Popper)
  .use(router)
  .mount('#app')
