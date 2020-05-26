import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const homepage = () => import('./../pages/homepage.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', name: 'home', component: homepage },
      { path: '*', redirect: {name: 'home'}}
    ]
  })
}
