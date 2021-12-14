import { createRouter, createWebHistory } from 'vue-router'
import ModernRoot from './template-modern/pages/ModernRoot.vue'
import ModernExtras from './template-modern/pages/ModernExtras.vue'
import ModernProjects from './template-modern/pages/ModernProjects.vue'
import ModernSkills from './template-modern/pages/ModernSkills.vue'
import ModernAbout from './template-modern/pages/ModernAbout.vue'
import HomeBourbon from './template-bourbon/pages/HomeBourbon.vue'
import HomeGroovy from './template-groovy/pages/HomeGroovy.vue'
import HomeTechy from './template-techy/pages/HomeTechy.vue'
import HomeCorp from './template-corp/pages/HomeCorp.vue'
import HomePunk from './template-punk/pages/HomePunk.vue'
import VueBodyClass from 'vue-body-class'

const routes = [
  {
    path: '/',
    redirect: 'Modern',
  },
  {
    path: '/Modern',
    name: 'Modern',
    component: ModernRoot,
    meta: {
      bodyClass: 'modern',
      title: 'Drew Harper – UI/UX Designer',
      metaTags: [
        // {
        //   name: 'description',
        //   content: 'The home page of our example app.',
        // }
      ],
    },
    children: [
      {
        path: '',
        redirect: '/Modern/Projects', // default child path
      },
      {
        path: 'Projects',
        name: 'ModernProjects',
        component: ModernProjects,
        meta: {
          bodyClass: 'projects',
          title: 'Drew Harper – UI/UX Designer Projects',
          metaTags: [
            // {
            //   name: 'description',
            //   content: 'The home page of our example app.',
            // }
          ],
        },
      },
      {
        path: 'Skills',
        name: 'ModernSkills',
        component: ModernSkills,
        meta: {
          bodyClass: 'skills',
          title: 'Drew Harper – UI/UX Designer Skills',
          metaTags: [
            // {
            //   name: 'description',
            //   content: 'The home page of our example app.',
            // }
          ],
        },
      },
      {
        path: 'About',
        name: 'ModernAbout',
        component: ModernAbout,
        meta: {
          bodyClass: 'about',
          title: 'Drew Harper – UI/UX Designer About',
          metaTags: [
            // {
            //   name: 'description',
            //   content: 'The home page of our example app.',
            // }
          ],
        },
      },
      {
        path: 'Extras',
        name: 'ModernExtras',
        component: ModernExtras,
        meta: {
          bodyClass: 'extras',
          title: 'Drew Harper – UI/UX Designer Projects',
          metaTags: [
            // {
            //   name: 'description',
            //   content: 'The home page of our example app.',
            // }
          ],
        },
      },
      // ...other sub routes
    ],
  },
  // />> END MODERN
  {
    path: '/Bourbon',
    name: 'Bourbon',
    component: HomeBourbon,
    meta: {
      bodyClass: 'bourbon',
      title: 'Drew Harper – UI/UX Designer',
      metaTags: [
        // {
        //   name: 'description',
        //   content: 'The home page of our example app.',
        // }
      ],
    },
  },
  {
    path: '/Groovy',
    name: 'Groovy',
    component: HomeGroovy,
    meta: {
      bodyClass: 'groovy',
      title: 'Drew Harper – UI/UX Designer',
      metaTags: [
        // {
        //   name: 'description',
        //   content: 'The home page of our example app.',
        // }
      ],
    },
  },
  {
    path: '/Techy',
    name: 'Techy',
    component: HomeTechy,
    meta: {
      bodyClass: 'techy',
      title: 'Drew Harper – UI/UX Designer',
      metaTags: [
        // {
        //   name: 'description',
        //   content: 'The home page of our example app.',
        // }
      ],
    },
  },
  {
    path: '/Corp',
    name: 'Corp',
    component: HomeCorp,
    meta: {
      bodyClass: 'corp',
      title: 'Drew Harper – UI/UX Designer',
      metaTags: [
        // {
        //   name: 'description',
        //   content: 'The home page of our example app.',
        // }
      ],
    },
  },
  {
    path: '/Punk',
    name: 'Punk',
    component: HomePunk,
    meta: {
      bodyClass: 'punk',
      title: 'Drew Harper – UI/UX Designer',
      metaTags: [
        // {./template-modern/pages/ModernExtras.vue
        //   name: 'description',
        //   content: 'The home page of our example app.',
        // }
      ],
    },
  },
  {
    path: '/Bourbon/Extras',
    name: 'ExtrasBourbon',
    // route level code-splitting
    // this generates a separate chunk (Extras.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: 'ExtrasBourbon' */ './template-bourbon/pages/Extras.vue'
      ),
    meta: {
      bodyClass: 'bourbon extras',
      title: 'Drew Harper – UI/UX Designer',
      metaTags: [
        // {
        //   name: 'description',
        //   content: 'The home page of our example app.',
        // }
      ],
    },
  },
  {
    path: '/Corp/Extras',
    name: 'ExtrasCorp',
    // route level code-splitting
    // this generates a separate chunk (Extras.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: 'ExtrasCorp' */ './template-corp/pages/Extras.vue'
      ),
    meta: {
      bodyClass: 'corp extras',
      title: 'Drew Harper – UI/UX Designer',
      metaTags: [
        // {
        //   name: 'description',
        //   content: 'The home page of our example app.',
        // }
      ],
    },
  },
  {
    path: '/Groovy/Extras',
    name: 'ExtrasGroovy',
    // route level code-splitting
    // this generates a separate chunk (Extras.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: 'ExtrasGroovy' */ './template-groovy/pages/Extras.vue'
      ),
    meta: {
      bodyClass: 'groovy extras',
      title: 'Drew Harper – UI/UX Designer',
      metaTags: [
        // {
        //   name: 'description',
        //   content: 'The home page of our example app.',
        // }
      ],
    },
  },
  {
    path: '/Punk/Extras',
    name: 'ExtrasPunk',
    // route level code-splitting
    // this generates a separate chunk (Extras.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: 'ExtrasPunk' */ './template-punk/pages/Extras.vue'
      ),
    meta: {
      bodyClass: 'punk extras',
      title: 'Drew Harper – UI/UX Designer',
      metaTags: [
        // {
        //   name: 'description',
        //   content: 'The home page of our example app.',
        // }
      ],
    },
  },
  {
    path: '/Techy/Extras',
    name: 'ExtrasTechy',
    // route level code-splitting
    // this generates a separate chunk (Extras.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: 'ExtrasTechy' */ './template-techy/pages/Extras.vue'
      ),
    meta: {
      bodyClass: 'techy extras',
      title: 'Drew Harper – UI/UX Designer',
      metaTags: [
        // {
        //   name: 'description',
        //   content: 'The home page of our example app.',
        // }
      ],
    },
  },
  {
    path: '/NotFound',
    redirect: '/',
  },
  {
    path: '/404',
    redirect: '/',
  },
]

const vueBodyClass = new VueBodyClass(routes)

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  // eslint-disable-next-line no-undef
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title)

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(
    document.querySelectorAll('[data-vue-router-controlled]')
  ).map((el) => el.parentNode.removeChild(el))

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next()

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement('meta')

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key])
      })

      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '')

      return tag
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag))

  vueBodyClass.guard(to, from, next())
  // next()
})
export default router
