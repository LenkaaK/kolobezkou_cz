import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Trasy from '../views/Trasy.vue'
import Pujcovny from '../views/Pujcovny.vue'
import Seznamka from '../views/Seznamka.vue'
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
    path: '/seznamka',
    name: 'Seznamka',
    component: Seznamka
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
