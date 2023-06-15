import { createRouter, createWebHistory } from "vue-router"
import { setupLayouts } from "virtual:generated-layouts"
import generatedRoutes from "virtual:generated-pages"
const routerHistory = createWebHistory()
const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 32,
      }
    } else {
      return { top: 0, behavior: "smooth" }
    }
  },
  history: routerHistory,
  routes,
})
export default router
