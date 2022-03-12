<script setup lang="ts">
import { isDark } from '~/composables'
const { t } = useI18n()

withDefaults(
  defineProps<{
    blog: {
      title: string
      description: string
      slug: string
      image: string
      styles: string
      new?: boolean
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

const getComputedDate = (date: string) => {
  const dateObj = new Date(date)
  const month = dateObj.toLocaleString('default', { month: 'long' })
  const day = dateObj.getDate()
  const year = dateObj.getFullYear()
  return `${month} ${day}, ${year}`
}

</script>

<template>
  <article class="w-full overflow-hidden rounded-lg col-span-6 bg-primaryLight shadow-md group" :class="blog.styles">
    <SmartLink :to="`blog/${blog.slug}`" class="flex-col w-full h-full">
      <div class="h-80 overflow-hidden">
        <img :src="`/assets/images/platforms/web/${isDark?'dark':'light'}-${blog.image}`" :alt="t(blog.title)" class="object-top w-full h-full object-cover transition duration-700 transform group-hover:scale-105">
      </div>
      <div class="flex flex-col flex-1 px-5 py-8">
        <h2 class="flex items-center gap-4 text-xl lg:text-2xl font-semibold text-secondaryDark">
          {{ t(blog.title) }}
          <span v-if="blog.new" class="text-sm text-accentContrast bg-gradient-to-br from-gradientFrom via-gradientVia to-gradientTo rounded-full px-2 py-1">
            New
          </span>
        </h2>
        <div class="flex items-center gap-2 my-2 text-secondaryDark text-xs ">
          <p class="opacity-60">
            {{ getComputedDate(blog.dateOfPublish) }}
          </p>
          <span class="opacity-60">
            •
          </span>
          <p class="flex items-center gap-2 ">
            <img class="h-7 w-7 rounded-full" :src="blog.author.image" :alt="blog.author.name">
            <span class="opacity-60">
              {{ t(blog.author.name) }}
            </span>
          </p>
        </div>
        <p class="flex w-11/12 my-2 max-w-xl opacity-75 text-secondaryDark leading-6 ">
          {{ t(blog.description) }}
        </p>
        <ul class="flex flex-wrap gap-2 my-4">
          <li v-for="(tag,tagIndex) in blog.tags" :key="`tag-${tag}-${tagIndex}`" class="bg-primaryDark py-2 px-3 text-xs rounded-full border-1 border-primaryDark">
            {{ t(tag) }}
          </li>
        </ul>
      </div>
    </SmartLink>
  </article>
</template>
