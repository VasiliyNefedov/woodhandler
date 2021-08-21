import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/manufacturing',
    name: 'Manufacturing',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Manufacturing.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: () => import(/* webpackChunkName: "about" */ '../views/Reviews.vue')
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: () => import(/* webpackChunkName: "about" */ '../views/Delivery.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacts.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
