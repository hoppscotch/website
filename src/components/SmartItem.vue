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
    svg?: string;
    infoIcon?: string;
    reverse?: boolean;
    disabled?: boolean;
    tag?: string;
    fill?: boolean;
    rounded?: boolean;
  }>(),
  {
    to: "",
    exact: false,
    blank: false,
    label: "",
    description: "",
    icon: "",
    svg: "",
    infoIcon: "",
    reverse: false,
    disabled: false,
    tag: "",
    fill: true,
    rounded: false,
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
    class="cursor-pointer text-secondary py-2 px-3 transition inline-flex sm:px-4 hover:text-secondaryDark focus:outline-none focus:text-secondaryDark"
    :class="[
      { 'flex-1': label },
      { 'flex-row-reverse justify-end': reverse },
      { 'pointer-events-none opacity-50 md:opacity-100 ': disabled },
      { 'hover:bg-primaryDark focus:bg-primaryDark ': fill },
      rounded ? 'rounded-full' : 'rounded',
    ]"
  >
    <component
      :is="icon"
      v-if="icon"
      :class="label ? (reverse ? 'ml-4 opacity-75' : 'mr-4 opacity-75') : ''"
      class="flex-shrink-0 my-0.5 inline-flex"
    />
    <div class="inline-flex items-start" :class="[{ 'flex-col': description }]">
      <div class="flex items-center">
        <div class="font-semibold">
          {{ label }}
        </div>
        <div
          v-if="tag"
          class="bg-primaryLight border border-dividerDarkborder border-dividerDark rounded-full font-medium text-secondaryLight ml-2 py-1 px-2 text-[8px]"
        >
          {{ tag }}
        </div>
      </div>
      <p v-if="description" class="my-2 text-xs text-left text-secondaryLight">
        {{ description }}
      </p>
    </div>
  </component>
</template>
