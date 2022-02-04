<template>
  <transition
    name="translate-down"
    appear
    enter-active-class="transition transform"
    enter-class="opacity-0 scale-95 -translate-y-3"
    enter-to-class="opacity-100 scale-100 translate-y-0"
    leave-active-class="transition transform"
    leave-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-3"
  >
    <slot />
  </transition>
</template>
