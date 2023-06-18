import { createApp } from "vue"
import { createHead } from "@vueuse/head"
import router from "./router"
import App from "./App.vue"
import VueTippy, { roundArrow } from "vue-tippy"
import "tippy.js/dist/tippy.css"
import "tippy.js/dist/svg-arrow.css"
import "tippy.js/themes/light.css"
import "tippy.js/animations/scale-subtle.css"
import "aos/dist/aos.css"
import "nprogress/nprogress.css"
import "./styles/style.scss"
const app = createApp(App)
const head = createHead()
app.use(head)
app.use(router)
app.use(VueTippy, {
  defaultProps: {
    animation: "scale-subtle",
    appendTo: document.body,
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
app.mount("#app")
