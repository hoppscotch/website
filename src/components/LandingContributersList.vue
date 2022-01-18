<script setup lang="ts">
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
  <div class="py-5 px-2 md:py-16">
    <div class="flex h-min-100vh w-full items-center justify-between overflow-hidden md:h-min-90vh  ">
      <div class="h-full w-0 md:w-[calc(100%/3)] ">
        <div class="h-full relative">
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
      <div class="flex flex-col h-full w-full justify-between md:w-[calc(100%/3)]  ">
        <div class="h-[calc(100%/3)] w-full relative md:h-33%">
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
        <div class="bg-primary flex flex-col h-[calc(100%/3)] py-6 px-5 z-2 items-center relative md:p-5 lg:h-33%">
          <h2 class="font-bold max-w-xl my-4 text-center text-secondaryDark leading-tight tracking-tight text-4xl">
            {{ t("home.contributers.title") }}
          </h2>
          <p class="font-semibold my-2 text-sm text-center text-accent tracking-widest uppercase">
            {{ t("home.contributers.description") }}
          </p>
        </div>
        <div class="h-[calc(100%/3)] w-full relative ">
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
      <div class="h-full w-0 md:w-[calc(100%/3)]">
        <div class="h-full relative">
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
