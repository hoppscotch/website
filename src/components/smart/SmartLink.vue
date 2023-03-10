<script setup lang="ts">
import { computed } from "vue"

const props = withDefaults(
  defineProps<{
    to: string;
    exact?: boolean;
    blank?: boolean;
  }>(),
  {
    to: "",
    exact: false,
    blank: false,
  }
)

const linkMode = computed(() => {
  if (!props.to) 
return "button"
  if (props.blank) 
return "anchor"
  if (/^\/(?!\/).*$/.test(props.to)) 
return "router-link"
  return "anchor"
})

const computedComponent = computed(() => {
  if (linkMode.value === "anchor") 
return "a"
  if (linkMode.value === "router-link") 
return "router-link"
  return "anchor"
})
</script>

<template>
  <component
    :is="computedComponent"
    :href="props.to"
    :to="props.to"
    :exact="props.exact"
    :target="props.blank ? '_blank' : '_self'"
  >
    <slot />
  </component>
</template>
