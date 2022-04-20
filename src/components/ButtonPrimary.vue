<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    to: string
    exact: boolean
    blank: boolean
    label: string
    description: string
    icon: string
    infoIcon: string
    reverse: boolean
    rounded: boolean
    loading: boolean
    large: boolean
    shadow: boolean
    gradient: boolean
    outline: boolean
    shortcut: string[]
  }>(), {
    to: '',
    exact: false,
    blank: false,
    label: '',
    description: '',
    icon: '',
    infoIcon: '',
    reverse: false,
    rounded: false,
    loading: false,
    large: false,
    gradient: false,
    shadow: false,
    outline: false,
    shortcut: () => [],
  },
)

const linkMode = computed(() => {
  if (!props.to)
    return 'button'
  if (props.blank)
    return 'anchor'
  if (/^\/(?!\/).*$/.test(props.to))
    return 'router-link'
  return 'anchor'
})

const computedComponent = computed(() => {
  if (linkMode.value === 'anchor')
    return 'a'
  if (linkMode.value === 'router-link')
    return 'router-link'
  return 'anchor'
})
</script>

<template>
  <component
    :is="computedComponent"
    v-bind="$attrs"
    :href="props.to"
    :to="props.to"
    class="inline-flex items-center justify-center py-2 font-bold cursor-pointer bg-accent text-accentContrast transition hover:bg-accentDark focus:outline-none focus-visible:bg-accentDark"
    :class="[
      label ? 'px-4' : 'px-2',
      rounded ? 'rounded-full' : 'rounded-lg',
      { 'pointer-events-none': loading },
      { 'px-6 py-4 text-lg': large },
      { 'shadow-lg hover:shadow-xl': shadow },
      {
        'text-accentContrast bg-gradient-to-tr from-gradientFrom via-gradientVia to-gradientTo':
          gradient,
      },
      {
        'border border-accent hover:border-accentDark focus-visible:border-accentDark':
          outline,
      },
    ]"
    :tabindex="loading ? '-1' : '0'"
  >
    <span
      v-if="!loading"
      class="inline-flex items-center justify-center whitespace-nowrap"
      :class="{ 'flex-row-reverse': reverse }"
    >
      <component
        :is="icon"
        v-if="icon"
        :class="label ? (reverse ? 'ml-4 opacity-75' : 'mr-4 opacity-75') : ''"
        class="inline-flex flex-shrink-0"
      />
      {{ label }}
      <div v-if="shortcut.length" class="ml-2 <sm:hidden">
        <kbd
          v-for="(key, index) in shortcut"
          :key="`key-${index}`"
          class="shortcut-key"
        >
          {{ key }}
        </kbd>
      </div>
    </span>
    <SmartSpinner v-else />
  </component>
</template>
