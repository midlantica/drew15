import Vue from 'vue'
import VueRouter from 'vue-router'

//
import HomeBourbon from '@/template-bourbon/pages/HomeBourbon.vue'
import HomeGroovy from '@/template-groovy/pages/HomeGroovy.vue'
import HomeTechy from '@/template-techy/pages/HomeTechy.vue'
import HomeCorp from '@/template-corp/pages/HomeCorp.vue'
import HomePunk from '@/template-punk/pages/HomePunk.vue'
import Meta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(Meta)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomeDefault',
      component: HomeBourbon
    },
    {
      path: '/Bourbon',
      name: 'HomeBourbon',
      component: HomeBourbon
    },
    {
      path: '/Groovy',
      name: 'HomeGroovy',
      component: HomeGroovy
    },
    {
      path: '/Techy',
      name: 'HomeTechy',
      component: HomeTechy
    },
    {
      path: '/Corp',
      name: 'HomeCorp',
      component: HomeCorp
    },
    {
      path: '/Punk',
      name: 'HomePunk',
      component: HomePunk
    },
    {
      path: '/Bourbon/Extras',
      name: 'ExtrasBourbon',
      // route level code-splitting
      // this generates a separate chunk (Extras.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/template-bourbon/pages/Extras.vue')
    },
    {
      path: '/Corp/Extras',
      name: 'ExtrasCorp',
      // route level code-splitting
      // this generates a separate chunk (Extras.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/template-corp/pages/Extras.vue')
    },
    {
      path: '/Groovy/Extras',
      name: 'ExtrasGroovy',
      // route level code-splitting
      // this generates a separate chunk (Extras.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/template-groovy/pages/Extras.vue')
    },
    {
      path: '/Punk/Extras',
      name: 'ExtrasPunk',
      // route level code-splitting
      // this generates a separate chunk (Extras.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/template-punk/pages/Extras.vue')
    },
    {
      path: '/Techy/Extras',
      name: 'ExtrasTechy',
      // route level code-splitting
      // this generates a separate chunk (Extras.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/template-techy/pages/Extras.vue')
    },
    // REDIRECTS ########
    // REDIRECTS ########
    // REDIRECTS ########
    {
      path: '*',
      redirect: HomeBourbon
    },
    {
      path: '/NotFound',
      component: HomeBourbon
    },
    {
      path: '/404',
      redirect: HomeBourbon
    }
  ]
})
