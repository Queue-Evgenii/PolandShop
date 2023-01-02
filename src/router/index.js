import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/catalog/:id',
    name: 'catalogList',
    component: () => import('../views/CatalogView.vue')
  },
  {
    path: '/product/:id',
    name: 'productItem',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/cart/',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/payment/',
    name: 'payment',
    component: () => import('../views/PaymentView.vue')
  },
  {
    path: '/kategorie/',
    name: 'kategorie',
  },
  {
    path: '/promocje/',
    name: 'promocje',
  },
  {
    path: '/aktualnosci/',
    name: 'aktualności',
  },
  {
    path: '/nowosci/',
    name: 'nowości',
  },
  {
    path: '/dostawa/',
    name: 'dostawa',
  },
  {
    path: '/opinie/',
    name: 'opinię',
  },
  {
    path: '/kontakt/',
    name: 'kontakt',
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
      return {x: 0, y: 0}
  }
})

export default router
