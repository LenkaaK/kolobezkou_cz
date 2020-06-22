import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Trasy from '../views/Trasy.vue'
import Pujcovny from '../views/Pujcovny.vue'
import Kontakty from '../views/Kontakty.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/trasy',
    name: 'Trasy',
    component: Trasy
  },
  {
    path: '/pujcovny',
    name: 'Pujcovny',
    component: Pujcovny
  },
  {
    path: '/kontakty',
    name: 'Kontakty',
    component: Kontakty
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
