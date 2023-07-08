import { createRouter, createWebHistory } from "vue-router"
import { setupLayouts } from "virtual:generated-layouts"
import generatedRoutes from "virtual:generated-pages"
import nProgress from "nprogress"

nProgress.configure({ showSpinner: false })
const routerHistory = createWebHistory()
const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  scrollBehavior(to, _from, _savedPosition) {
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
router.beforeResolve((to, _from, next) => {
  if (to.name) {
    nProgress.start()
  }
  next()
})
router.afterEach((_to, _from) => {
  nProgress.done()
})
export default router
