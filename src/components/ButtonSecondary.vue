<script setup lang="ts">
import { computed } from "vue"

const props = withDefaults(
  defineProps<{
    to?: string;
    exact?: boolean;
    blank?: boolean;
    label?: string;
    description?: string;
    icon?: string | object;
    infoIcon?: string;
    reverse?: boolean;
    rounded?: boolean;
    loading?: boolean;
    large?: boolean;
    shadow?: boolean;
    outline?: boolean;
    shortcut?: string[];
    fill?: boolean;
  }>(),
  {
    to: "",
    exact: false,
    blank: false,
    label: "",
    description: "",
    icon: "",
    infoIcon: "",
    reverse: false,
    rounded: true,
    loading: false,
    large: false,
    shadow: false,
    outline: false,
    shortcut: () => [],
    fill: false,
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
    v-bind="$attrs"
    :href="props.to"
    :to="props.to"
    class="inline-flex items-center justify-center py-2 cursor-pointer transition text-secondaryDark focus:outline-none"
    :class="[
      label ? 'px-4' : 'px-2',
      rounded ? 'rounded-full' : 'rounded',
      {
        'bg-primaryLight hover:bg-primaryDark focus-visible:bg-primaryDark':
          fill,
      },
      { 'pointer-events-none': loading },
      { 'px-6 text-lg font-semibold tracking-tight': large },
      { 'shadow-lg hover:shadow-xl': shadow },
      {
        'border border-divider hover:border-dividerDark': outline,
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
        :class="label ? (reverse ? 'ml-2 opacity-75' : 'mr-2 opacity-75') : ''"
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
