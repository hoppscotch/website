import { createApp } from "vue"
import { createHead } from "@unhead/vue"
import VueTippy, { roundArrow } from "vue-tippy"
import { InferSeoMetaPlugin } from "@unhead/addons"
import router from "./router"
import App from "./App.vue"
import "tippy.js/dist/tippy.css"
import "tippy.js/dist/svg-arrow.css"
import "tippy.js/animations/scale-subtle.css"
import "aos/dist/aos.css"
import "nprogress/nprogress.css"
import "./styles/style.scss"

const app = createApp(App)
const head = createHead()
head.use(InferSeoMetaPlugin())
app.use(head)
app.use(router)
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
          },
        },
      ],
    },
  },
})
app.mount("#app")
