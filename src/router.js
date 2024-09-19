// src/router.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/HomePage.vue'
import About from './views/AboutPage.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = new VueRouter({
  mode: 'history', // Use HTML5 history mode
  routes
})

export default router
