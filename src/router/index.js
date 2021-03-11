import { createRouter, createWebHistory } from "vue-router"
import HomeBourbon from "../template-bourbon/pages/HomeBourbon.vue"
import HomeGroovy from "../template-groovy/pages/HomeGroovy.vue"
import HomeTechy from "../template-techy/pages/HomeTechy.vue"
import HomeCorp from "../template-corp/pages/HomeCorp.vue"
import HomePunk from "../template-punk/pages/HomePunk.vue"
// import Meta from "vue-meta"

// Vue.use(Meta)

const routes = [
  {
    path: "/",
    name: "Bourbon",
    component: HomeBourbon,
  },
  {
    path: "/Bourbon",
    name: "Bourbon",
    component: HomeBourbon,
  },
  {
    path: "/Groovy",
    name: "Groovy",
    component: HomeGroovy,
  },
  {
    path: "/Techy",
    name: "Techy",
    component: HomeTechy,
  },
  {
    path: "/Corp",
    name: "Corp",
    component: HomeCorp,
  },
  {
    path: "/Punk",
    name: "Punk",
    component: HomePunk,
  },
  {
    path: "/Bourbon/Extras",
    name: "ExtrasBourbon",
    // route level code-splitting
    // this generates a separate chunk (Extras.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "ExtrasBourbon" */ "../template-bourbon/pages/Extras.vue"),
  },
  {
    path: "/Corp/Extras",
    name: "ExtrasCorp",
    // route level code-splitting
    // this generates a separate chunk (Extras.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "ExtrasCorp" */ "../template-corp/pages/Extras.vue"),
  },
  {
    path: "/Groovy/Extras",
    name: "ExtrasGroovy",
    // route level code-splitting
    // this generates a separate chunk (Extras.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "ExtrasGroovy" */ "../template-groovy/pages/Extras.vue"),
  },
  {
    path: "/Punk/Extras",
    name: "ExtrasPunk",
    // route level code-splitting
    // this generates a separate chunk (Extras.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "ExtrasPunk" */ "../template-punk/pages/Extras.vue"),
  },
  {
    path: "/Techy/Extras",
    name: "ExtrasTechy",
    // route level code-splitting
    // this generates a separate chunk (Extras.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "ExtrasTechy" */ "../template-techy/pages/Extras.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Bourbon",
    redirect: HomeBourbon,
  },
  {
    path: "/NotFound",
    component: HomeBourbon,
  },
  {
    path: "/404",
    redirect: HomeBourbon,
  },
  {
    path: "/:catchAll(.*)",
    redirect: HomeBourbon,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
export default router
