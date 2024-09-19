import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardPage from './views/DashboardPage.vue'
import ProjectsPage from './views/ProjectsPage.vue'
import TeamPage from './views/TeamPage.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'dashboardPage', component: DashboardPage },
  { path: '/projects', name: 'projectsPage', component: ProjectsPage },
  { path: '/team', name: 'teamPage', component: TeamPage },
]

const router = new VueRouter({
  model: 'history',
  routes
})

export default router
