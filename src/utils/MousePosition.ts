export default function useMousePosition() {
  const mousePosition = ref({ x: 0, y: 0 })
  const handleMouseMove = (event: MouseEvent) => {
    mousePosition.value = { x: event.clientX, y: event.clientY }
  }
  onMounted(() => {
    document.addEventListener("mousemove", handleMouseMove)
  })
  onBeforeUnmount(() => {
    document.removeEventListener("mousemove", handleMouseMove)
  })
  return mousePosition
}
