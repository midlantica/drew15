import { createApp, h } from 'vue';
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

createApp({
  data: {
    drewHarper: 'Drew Harper',
    uiuxDesigner: 'UI/UX Designer',
    frontEndDev: 'Front-End Dev',
    druHead: 'When UX design is done right the design seems inevitable',
    druCopy: "Whether it’s a prototype, a responsive website, a wireframe, an interactive <span class='smallCaps'>PDF</span>, a new mobile app <span class='smallCaps'>UI</span>, a quick skin job, a few more buttons, a dialog box, filling up a bucket, or getting in the trenches with  <span class='smallCaps'>HTML</span> and <span class='smallCaps'>CSS</span>, I can deliver. I don’t let ‘design’ get in the way. Oh and I’m a coder groupie 😃",
    aboutCopy: 'I’m half-English/half-American, worked in Advertising most my life, switched to web in late ’90s. Travelled the world, enjoy reading history, love NFL, Rugby, Footy.',
    bourbon: 'Bourbon',
    groovy: 'Groovy',
    techy: 'Techy',
    corp: 'Corp',
    punk: 'Punk'
  },

  render: () => h(App)
}).use(router)
  .mount('#app')
