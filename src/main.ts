import { ViteSSG } from "vite-ssg"
import VueGtag from "vue-gtag"
import VueTippy, { roundArrow } from "vue-tippy"
import { setupLayouts } from "virtual:generated-layouts"
import { routes } from "vue-router/auto-routes"
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

export const createApp = ViteSSG(
  App,
  {
    routes: setupLayouts(routes),
    base: import.meta.env.BASE_URL,
    scrollBehavior(to) {
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
    app.use(VueGtag, {
      config: { id: "G-LQ01D3PKKN" },
    })
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
  },
)
