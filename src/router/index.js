import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectView from '../views/ProjectsView.vue'
import ArtView from '../views/ArtView.vue'
import WorkExpView from '../views/WorkExpView.vue'
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
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
  },
  {
    path: '/projects',
    name: 'project',
    component: ProjectView
  },
  {
    path: '/art',
    name: 'art',
    component: ArtView
  },
  {
    path: '/workexp',
    name: 'workExp',
    component: WorkExpView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
