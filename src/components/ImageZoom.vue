<template>
  <img :ref="attachZoom" />
</template>
<script setup>
import mediumZoom from "medium-zoom"
const props = defineProps({
  options: {
    type: Object,
    default: { margin: 20 },
  },
})
let zoom = null
function getZoom() {
  if (zoom === null) {
    zoom = mediumZoom(props.options)
  }
  return zoom
}
function attachZoom(ref) {
  const image = ref
  const zoom = getZoom()
  if (image) {
    zoom.attach(image)
  } else {
    zoom.detach()
  }
}
watch(
  () => props.options,
  (options) => {
    const zoom = getZoom()
    zoom.update(options || props.default)
  }
)
</script>
