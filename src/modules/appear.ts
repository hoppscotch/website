import type { DirectiveBinding, VNode } from "vue"
import type { UserModule } from "~/types"

export const install: UserModule = ({ app }) => {
  app.directive("appear", {
    beforeMount(element: HTMLElement) {
      element.style.visibility = "hidden"
    },
    updated(
      element: HTMLElement,
      binding: DirectiveBinding<boolean>,
      node: VNode
    ) {
      if (!binding.value === !binding.oldValue || node.transition === null) {
        return
      }
      if (!binding.value) {
        node.transition.leave(element, () => {
          element.style.visibility = "hidden"
        })
        return
      }
      node.transition.beforeEnter(element)
      element.style.visibility = ""
      node.transition.enter(element)
    },
  })
}
