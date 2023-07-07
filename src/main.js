import { createHead } from "@unhead/vue"
import App from "./App.vue"
import VueTippy, { roundArrow } from "vue-tippy"
import "tippy.js/dist/tippy.css"
import "tippy.js/dist/svg-arrow.css"
import "tippy.js/themes/light.css"
import "tippy.js/animations/scale-subtle.css"
import "aos/dist/aos.css"
import "./styles/style.scss"
const head = createHead()
import { setupLayouts } from "virtual:generated-layouts"
import generatedRoutes from "virtual:generated-pages"
const routes = setupLayouts(generatedRoutes)
import { ViteSSG } from "vite-ssg"
export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
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
  },
  ({ app, router, routes, isClient, initialState }) => {
    app.use(head)
    app.use(router)
    app.use(VueTippy, {
      defaultProps: {
        animation: "scale-subtle",
        allowHTML: false,
        animateFill: false,
        arrow: roundArrow + roundArrow,
        theme: "light",
        offset: [0, 16],
        popperOptions: {
          modifiers: [
            {
              name: "preventOverflow",
              options: {
                rootBoundary: "document",
              },
            },
          ],
        },
      },
    })
  }
)
