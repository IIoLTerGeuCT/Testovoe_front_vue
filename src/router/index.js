import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '@/components/Authentication'
import Images from '@/components/Images'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/images',
    name: 'Images',
    component: Images,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
