
<script setup lang="ts">
import { computed, method } from 'vue'

withDefaults(
  defineProps<{
    id: number
    name: string
    image: string
    link: string
    size: number
    position: {
      top: string
      left: string
    }
<<<<<<< HEAD
=======

>>>>>>> eb7e247b218b8f3f973fa3c469665339bf0491af
  }>(), {
    id: 0,
    name: '',
    image: '',
    link: '',
    size: 11,
    position: {
      top: '',
      left: '',
    },
  },

)

</script>

<template>
  <a class="relative block rounded-full cloudAnimation " :class="`h-${size} w-${size}`" :style="{ top:position.top,left:position.left}" :href="link" :title="name">
    <img :src="image" :alt="name" loading="lazy" class="h-full w-full object-cover rounded-full transition-transform ease-in-out  ">
  </a>
</template>

<style lang="scss" scoped>
.cloudAnimation{
  animation: 15s infinite alternate ease-in-out cloudAnimation;
  &:hover{
    img{
      transform: scale(1.2);
    }
  }
}

@keyframes cloudAnimation {
  0% {
    transform: translate(0px, 0px) rotate(0deg);
  }
  20% {
    transform: translate(6px, 6px) rotate(1deg);
  }
  40% {
    transform: translate(9px, 9px) rotate(2deg);
  }
  60% {
    transform: translate(12px, 12px) rotate(3deg);
  }
  80% {
    transform: translate(9px, 9px) rotate(2deg);
  }
  80% {
    transform: translate(6px, 6px) rotate(1deg);
  }
  100% {
    transform: translate(0px, 0px) rotate(0deg);
  }

}
</style>
