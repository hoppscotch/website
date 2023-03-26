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
    infoIcon?: string | object;
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
    class="inline-flex px-4 py-2 cursor-pointer transition text-secondary sm:px-4 hover:text-secondaryDark focus:outline-none focus:text-secondaryDark"
    :class="[
      { 'flex-1': label },
      { 'flex-row-reverse justify-end': reverse },
      { 'pointer-events-none opacity-50 md:opacity-100': disabled },
      { 'hover:bg-primaryDark focus:bg-primaryDark': fill },
      rounded ? 'rounded-full' : 'rounded-lg',
    ]"
    :target="props.blank ? '_blank' : '_self'"
  >
    <component
      :is="icon"
      v-if="icon"
      :class="label ? (reverse ? 'ml-3 opacity-75' : 'mr-3 opacity-75') : ''"
      class="flex-shrink-0 my-0.5 inline-flex"
    />
    <div
      class="inline-flex items-center"
      :class="[{ 'mt-0.5 !items-start flex-col': description }]"
    >
      <div class="flex items-center">
        <span class="tracking-tight">
          {{ label }}
        </span>
        <div
          v-if="tag"
          class="bg-primaryLight border border-dividerDarkborder border-dividerDark rounded-full font-medium text-secondaryLight ml-2 py-1 px-2 text-[8px]"
        >
          {{ tag }}
        </div>
      </div>
      <div v-if="description" class="my-2 text-left text-secondaryLight">
        {{ description }}
      </div>
    </div>
  </component>
</template>
