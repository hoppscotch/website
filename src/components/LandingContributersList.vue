<script setup lang="ts">
import { computed, ref } from 'vue'
import { contributers } from '~/assets/data/contributers'
const { t } = useI18n()

const randomPositions = [
  {
    top: '10%',
    left: '10%',
  },
  {
    top: '20%',
    left: '20%',
  },
  {
    top: '30%',
    left: '30%',
  },
  {
    top: '40%',
    left: '40%',
  },
  {
    top: '50%',
    left: '50%',
  },
  {
    top: '60%',
    left: '60%',
  },
  {
    top: '70%',
    left: '70%',
  },
  {
    top: '80%',
    left: '80%',
  },
  {
    top: '90%',
    left: '90%',
  },
  {
    top: '95%',
    left: '95%',
  },
  {
    top: '35%',
    left: '35%',
  },

]

const randomSizeGenerator = () => {
  return Math.floor(Math.random() * (25 - 15 + 1) + 15)
}

const randomPositionGenerator = () => {
  return randomPositions[Math.floor(Math.random() * (10 - 0 + 1) + 0)]
}

</script>

<template>
  <div class="px-2 py-5 md:py-16">
    <div class="h-min-100vh md:h-min-90vh w-full flex items-center justify-between overflow-hidden  ">
      <div class="h-full w-[calc(100%/3)] ">
        <div class="relative h-full">
          <div v-for="(contributer,index) in contributers" :key="`contributer-${index}`" class="w-c">
            <ContibuterUserBubble
              :name="contributer.name"
              :image="contributer.image"
              :link="contributer.link"
              :size="randomSizeGenerator()"
              :position="randomPositionGenerator()"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-between h-full w-full w-[calc(100%/3)]  ">
        <div class="relative h-[calc(100%/3)] md:h-33% w-full">
          <div v-for="(contributer,index) in (contributers.slice(0,5))" :key="`contributer-${index}`">
            <ContibuterUserBubble
              :name="contributer.name"
              :image="contributer.image"
              :link="contributer.link"
              :size="randomSizeGenerator()"
              :position="randomPositionGenerator()"
            />
          </div>
        </div>

        <div class="flex flex-col items-center bg-primary h-[calc(100%/3)] lg:h-33% relative py-6 px-5 md:p-5 z-2">
          <h2 class="max-w-xl my-4 text-4xl font-bold leading-tight tracking-tight text-center text-secondaryDark">
            {{ t("home.contributers.title") }}
          </h2>
          <p class="my-2 text-sm font-semibold tracking-widest text-center uppercase text-accent">
            {{ t("home.contributers.description") }}
          </p>
        </div>

        <div class="relative h-[calc(100%/3)] w-full ">
          <div v-for="(contributer,index) in (contributers.slice(0,5))" :key="`contributer-${index}`">
            <ContibuterUserBubble
              :name="contributer.name"
              :image="contributer.image"
              :link="contributer.link"
              :size="randomSizeGenerator()"
              :position="randomPositionGenerator()"
            />
          </div>
        </div>
      </div>
      <div class="h-full w-[calc(100%/3)]">
        <div class="relative h-full">
          <div v-for="(contributer,index) in contributers" :key="`contributer-${index}`">
            <ContibuterUserBubble
              :name="contributer.name"
              :image="contributer.image"
              :link="contributer.link"
              :size="randomSizeGenerator()"
              :position="randomPositionGenerator()"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
