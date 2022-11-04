<script setup lang="ts">
import { blogs } from '~/assets/data/blogList'
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="grid gap-4 grid-cols-6">
      <BlogCard v-for="(blog, index) in blogs" :key="`blog-${index}`" :blog="blog" />
    </div>
  </div>
</template>
