<script setup lang="ts">
import { computed } from "vue"
import { blogs } from "~/assets/data/blogList"

const sortedBlogs = computed(() => blogs.sort((a, b) => {
  return new Date(b.dateOfPublish).getTime() - new Date(a.dateOfPublish).getTime()
}))
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div v-interactive-hover-animation class="w-full grid grid-cols-6 gap-4">
      <BlogCard
        v-for="(blog, index) in sortedBlogs"
        :key="`blog-${index}`"
        :blog="blog"
      />
    </div>
  </div>
</template>
