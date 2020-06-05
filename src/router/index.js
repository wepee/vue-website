import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

let routes;
routes = [
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

  },
  {
    path: '/',
    name: 'Home',
    meta: {layout : "default" },
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {layout : "no-banner"},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/mon-parcours',
    name: 'parcours',
    meta: {layout : "no-banner"},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Parcours.vue')
  },
  {
    path: '/ressources',
    name: 'ressources',
    meta: {layout : "no-banner"},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Ressources.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
