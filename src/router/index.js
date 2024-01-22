import { createRouter, createWebHashHistory  } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/newpage',
    name: '新增頁面',
    component: () => import('../views/NewPage.vue'),
    children: [
      {
        path: 'a',
        component: () => import('../components/ComponentA.vue')
      },
      {
        path: 'b',
        component: () => import('../components/ComponentB.vue')
      },
      {
        path: 'dynamicRouter',
        component: () => import('../views/DynamicRouter.vue')
      },
      {
        path: 'nameView',
        component: () => import('../views/NamedView.vue'),
        children: [
          {
            path: 'C2A',
            components: {
              left: () => import('../components/ComponentC.vue'),
              right: () => import('../components/ComponentA.vue'),
            }
          },
          {
            path: 'A2B',
            components: {
              left: () => import('../components/ComponentA.vue'),
              right: () => import('../components/ComponentB.vue'),
            }
          },
        ]
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHashHistory (import.meta.env.BASE_URL),
  routes
})

export default router
