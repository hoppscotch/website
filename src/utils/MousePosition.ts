export default function useMousePosition() {
  const mousePosition = ref({ x: 0, y: 0 })
  const handleMouseMove = (event: MouseEvent) => {
    mousePosition.value = { x: event.clientX, y: event.clientY }
  }

  let mousemoveListener: (() => void) | null = null

  onMounted(() => {
    mousemoveListener = useEventListener(document, "mousemove", handleMouseMove)
  })

  const cleanupMousemove = () => {
    if (mousemoveListener) {
      mousemoveListener()
      mousemoveListener = null
    }
  }

  onBeforeUnmount(() => {
    cleanupMousemove()
  })

  return mousePosition
}
