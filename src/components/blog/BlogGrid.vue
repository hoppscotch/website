<script setup lang="ts">
import { blogs } from "~/assets/data/blogList"
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div v-interactive-hover-animation class="w-full grid grid-cols-6 gap-4">
      <BlogCard
        v-for="(blog, index) in blogs"
        :key="`blog-${index}`"
        :blog="blog"
      />
    </div>
  </div>
</template>
