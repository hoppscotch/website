<script setup lang="ts">
import { isDark } from '~/composables'
const props = withDefaults(
  defineProps<{
    blog: {
      title: string
      description: string
      slug: string
      image: string
      styles: string
      dateOfPublish: string
      author: {
        name: string
        image: string
      }
      tags: string[]
    }
  }>(),
  {},
)
const { t } = useI18n()

const getComputedDate = computed(() => {
  const date = new Date(props.blog.dateOfPublish)
  const month = date.toLocaleString('default', { month: 'long' })
  const day = date.getDate()
  const year = date.getFullYear()
  return `${month} ${day}, ${year}`
})
</script>

<template>
  <article class="w-full overflow-hidden rounded shadow-md bg-primaryLight col-span-6 group" :class="blog.styles">
    <SmartLink :to="`blog/${blog.slug}`" class="flex-col w-full h-full">
      <div class="overflow-hidden h-80">
        <img :src="`/assets/images/platforms/web/${isDark ? 'dark' : 'light'}-${blog.image}`" :alt="t(blog.title)" class="object-cover object-top w-full h-full transform transition duration-700 group-hover:scale-105">
      </div>
      <div class="flex flex-col flex-1 px-5 py-8">
        <h2 class="flex items-center text-xl font-semibold text-secondaryDark gap-4 lg:text-2xl">
          {{ t(blog.title) }}
        </h2>
        <div class="flex items-center my-2 text-secondaryDark">
          <img class="rounded-full h-7 w-7" :src="blog.author.image" :alt="blog.author.name">
          <p class="flex flex-col ml-3">
            <span class="text-xs font-medium opacity-60">
              {{ t(blog.author.name) }}
            </span>
            <span class="text-xs opacity-60">
              {{ getComputedDate }}
            </span>
          </p>
        </div>
        <p class="flex w-11/12 max-w-xl my-2 opacity-75 text-secondaryDark leading-6">
          {{ t(blog.description) }}
        </p>
        <ul class="flex flex-wrap my-4">
          <li v-for="(tag, tagIndex) in blog.tags" :key="`tag-${tag}-${tagIndex}`" class="px-3 py-2 text-xs rounded-full bg-primaryDark border-primaryDark border-1">
            {{ t(tag) }}
          </li>
        </ul>
      </div>
    </SmartLink>
  </article>
</template>
