<template>
  <div ref="containerRef">
    <slot></slot>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, reactive, watch } from "vue"
import useMousePosition from "./../utils/MousePosition"

export default {
  name: "Highlighter",
  props: {
    refresh: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const containerRef = ref(null)
    const mousePosition = useMousePosition()
    const mouse = reactive({ x: 0, y: 0 })
    const containerSize = reactive({ w: 0, h: 0 })
    const boxes = ref([])

    onMounted(() => {
      if (containerRef.value) {
        boxes.value = Array.from(containerRef.value.children)
      }
      initContainer()
      window.addEventListener("resize", initContainer)
    })

    onBeforeUnmount(() => {
      window.removeEventListener("resize", initContainer)
    })

    watch(
      () => mousePosition.value,
      () => {
        onMouseMove()
      }
    )

    watch(
      () => props.refresh,
      () => {
        initContainer()
      }
    )

    const initContainer = () => {
      if (containerRef.value) {
        containerSize.w = containerRef.value.offsetWidth
        containerSize.h = containerRef.value.offsetHeight
      }
    }

    const onMouseMove = () => {
      if (containerRef.value) {
        const rect = containerRef.value.getBoundingClientRect()
        const { w, h } = containerSize
        const x = mousePosition.value.x - rect.left
        const y = mousePosition.value.y - rect.top
        const inside = x < w && x > 0 && y < h && y > 0
        if (inside) {
          mouse.x = x
          mouse.y = y
          boxes.value.forEach((box) => {
            const boxX =
              -(box.getBoundingClientRect().left - rect.left) + mouse.x
            const boxY = -(box.getBoundingClientRect().top - rect.top) + mouse.y
            box.style.setProperty("--mouse-x", `${boxX}px`)
            box.style.setProperty("--mouse-y", `${boxY}px`)
          })
        }
      }
    }

    return {
      containerRef,
    }
  },
}
</script>
