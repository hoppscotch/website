<script setup lang="ts">
import { isDark } from '~/composables'
const { t } = useI18n()

const props = withDefaults(
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

const getComputedDate = computed(() => {
  const date = new Date(props.blog.dateOfPublish)
  const month = date.toLocaleString('default', { month: 'long' })
  const day = date.getDate()
  const year = date.getFullYear()
  return `${month} ${day}, ${year}`
})

</script>

<template>
  <article class="w-full col-span-6 overflow-hidden rounded-lg shadow-md bg-primaryLight group" :class="blog.styles">
    <SmartLink :to="`blog/${blog.slug}`" class="flex-col w-full h-full">
      <div class="overflow-hidden h-80">
        <img :src="`/assets/images/platforms/web/${isDark?'dark':'light'}-${blog.image}`" :alt="t(blog.title)" class="object-cover object-top w-full h-full transition duration-700 transform group-hover:scale-105">
      </div>
      <div class="flex flex-col flex-1 px-5 py-8">
        <h2 class="flex items-center gap-4 text-xl font-semibold lg:text-2xl text-secondaryDark">
          {{ t(blog.title) }}
          <span v-if="blog.new" class="px-2 py-1 text-sm rounded-full text-accentContrast bg-gradient-to-br from-gradientFrom via-gradientVia to-gradientTo">
            New
          </span>
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
        <p class="flex w-11/12 max-w-xl my-2 leading-6 opacity-75 text-secondaryDark">
          {{ t(blog.description) }}
        </p>
        <ul class="flex flex-wrap my-4">
          <li v-for="(tag,tagIndex) in blog.tags" :key="`tag-${tag}-${tagIndex}`" class="px-3 py-2 text-xs rounded-full bg-primaryDark border-1 border-primaryDark">
            {{ t(tag) }}
          </li>
        </ul>
      </div>
    </SmartLink>
  </article>
</template>
