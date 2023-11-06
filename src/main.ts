import { ViteSSG } from "vite-ssg"
import VueTippy, { roundArrow } from "vue-tippy"
import { setupLayouts } from "virtual:generated-layouts"
import generatedRoutes from "virtual:generated-pages"
import { MotionPlugin } from "@vueuse/motion"
import { GesturePlugin } from "@vueuse/gesture"
import App from "./App.vue"
import NProgress from "nprogress"
import "tippy.js/dist/tippy.css"
import "tippy.js/dist/svg-arrow.css"
import "tippy.js/animations/scale-subtle.css"
import "@fontsource-variable/inter"
import "@fontsource-variable/plus-jakarta-sans"
import "./styles/style.scss"

NProgress.configure({ showSpinner: false })

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
    scrollBehavior(to, _from, _savedPosition) {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: "smooth",
          top: 0,
        }
      } else {
        return { top: 0, behavior: "smooth" }
      }
    },
  },
  ({ app, isClient, router }) => {
    app.use(GesturePlugin)
    app.use(MotionPlugin)
    app.use(VueTippy, {
      defaultProps: {
        animation: "scale-subtle",
        allowHTML: false,
        animateFill: false,
        arrow: roundArrow + roundArrow,
        offset: [0, 16],
        popperOptions: {
          modifiers: [
            {
              name: "preventOverflow",
              options: {
                rootBoundary: "document",
                escapeWithReference: true,
              },
            },
          ],
        },
      },
    })
    if (isClient) {
      router.beforeEach((to, from) => {
        if (to.path !== from.path) NProgress.start()
      })
      router.afterEach(() => {
        NProgress.done()
      })
    }
  }
)
