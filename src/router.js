import { createRouter, createWebHistory } from "vue-router"
import { setupLayouts } from "virtual:generated-layouts"
import generatedRoutes from "virtual:generated-pages"

const routerHistory = createWebHistory()
const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 })
    } else {
      document.querySelector("html").style.scrollBehavior = "auto"
      window.scroll({ top: 0 })
      document.querySelector("html").style.scrollBehavior = ""
    }
  },
  history: routerHistory,
  routes,
})

export default router
