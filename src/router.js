import Vue from 'vue'
import Router from 'vue-router'
import Home from './template-bourbon/pages/index.vue'
import Meta from 'vue-meta'
// import Extras from './pages/Extras.vue'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Extras',
      name: 'extras',
      // route level code-splitting
      // this generates a separate chunk (Extras.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Extras" */ './template-bourbon/pages/Extras.vue')
    },
    // REDIRECTS ########
    // REDIRECTS ########
    // REDIRECTS ########
    {
      path: '*',
      redirect: Home
    },
    {
      path: '/NotFound',
      component: Home
    },
    {
      path: '/404',
      redirect: Home
    }
  ]
})
