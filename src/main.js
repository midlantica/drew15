import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  data: {
    drewHarper: `Drew Harper`,
    uiuxDesigner: `UI/UX Designer`,
    druHead: `Don’t let design get in the way of communication`,
    druCopy: `Whether it’s a prototype, a responsive website, a wireframe, an interactive PDF, a new mobile app UI, a quick skin job, a few more buttons, a dialog box, filling up a bucket, or getting in the trenches with  HTML 5 and CSS 3, I can deliver. I don’t let ‘design’ get in the way. Oh and I’m a coder groupie 😃`,
    aboutCopy: `I'm half-English/half-American, worked in Advertising most my life, switched to web in late '90s. Travelled the world, enjoy reading history, love NFL, Rugby, Footy.`,
    bourbon: `Bourbon`,
    groovy: `Groovy`,
    techy: `Techy`,
    corp: `Corp`,
    punk: `Punk`
  },
  render: h => h(App)
}).$mount('#app')
