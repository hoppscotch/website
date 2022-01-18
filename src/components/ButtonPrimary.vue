
<script setup lang="ts">
withDefaults(
  defineProps<{
    to: String
    label: String
    description: String
    icon: String
    svg: String
    infoIcon: String
    reverse: Boolean
    rounded: Boolean
    loading: Boolean
    large: Boolean
    shadow: Boolean
    gradient: Boolean
    outline: Boolean
    shortcut: String[]
  }>(), {
    to: '',
    label: '',
    description: '',
    icon: '',
    svg: '',
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
</script>

<template>
  <router-link
    :to="to"
    class="bg-accent font-bold text-accentContrast py-2 transition inline-flex items-center justify-center hover:bg-accentDark focus:outline-none focus-visible:bg-accentDark"
    :class="[
      label ? 'px-4' : 'px-2',
      rounded ? 'rounded-full' : 'rounded',
      { 'pointer-events-none': loading },
      { 'px-6 py-4 text-lg': large },
      { 'shadow-lg hover:shadow-xl': shadow },
      {
        'text-white bg-gradient-to-tr from-gradientFrom via-gradientVia to-gradientTo':
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
      <i
        v-if="icon"
        class="material-icons"
        :class="[
          { '!text-2xl': large },
          label ? (reverse ? 'ml-2' : 'mr-2') : '',
        ]"
      >
        {{ icon }}
      </i>
      <SmartIcon
        v-if="svg"
        :name="svg"
        class="svg-icons"
        :class="[
          { '!h-6 !w-6': large },
          label ? (reverse ? 'ml-2' : 'mr-2') : '',
        ]"
      />
      {{ label }}
      <div v-if="shortcut.length" class="ml-2 <sm:hidden">
        <kbd
          v-for="(key, index) in shortcut"
          :key="`key-${index}`"
          class="shortcut-key !bg-accentLight"
        >
          {{ key }}
        </kbd>
      </div>
    </span>
    <SmartSpinner v-else />
  </router-link>
</template>
