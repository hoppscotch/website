<script setup lang="ts">
import blogs from "../data/blogList.json"

const sortedBlogs = computed(() => {
  try {
    const clonedBlogs = [...blogs]

    return clonedBlogs.sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()

      return dateB - dateA
    })
  } catch (error) {
    console.error("Error sorting blogs:", error)
    return []
  }
})
</script>

<template>
  <!-- Articles list -->
  <div class="mx-auto">
    <!-- Articles container -->
    <div class="grid gap-16 md:grid-cols-12 md:gap-y-20">
      <article
        v-for="(blog, index) in sortedBlogs"
        :key="`blog-${index}`"
        class="flex h-full flex-col"
        :class="blog.styles"
      >
        <header>
          <RouterLink
            :to="`/blog/${blog.slug}`"
            class="relative mb-4 block aspect-video w-full rounded md:rounded-xl"
          >
            <img
              loading="lazy"
              class="absolute inset-0 h-full w-full rounded object-cover transition duration-500 md:rounded-xl"
              :src="`/images/${blog.banner}`"
              width="352"
              height="198"
              :alt="blog.title"
            />
          </RouterLink>
          <div class="mb-4">
            <ul class="-m-1 flex flex-wrap text-xs">
              <li
                v-for="(tag, tagIndex) in blog.tags"
                :key="tagIndex"
                class="m-1"
              >
                <span
                  class="inline-flex text-center text-zinc-100/50 transition"
                >
                  {{ tag }}</span
                >
              </li>
            </ul>
          </div>
          <h4 class="mb-4 w-4/5">
            <RouterLink
              :to="`/blog/${blog.slug}`"
              class="text-zinc-200 transition hover:text-zinc-100"
            >
              {{ blog.title }}
            </RouterLink>
          </h4>
        </header>
        <p class="mb-2 max-w-2xl text-zinc-400/80">
          {{ blog.description }}
        </p>
        <footer class="mt-4 flex items-center">
          <img
            loading="lazy"
            class="mr-2 shrink-0 rounded-full"
            :src="`/images/${blog.author.image}`"
            width="16"
            height="16"
            :alt="blog.author.name"
          />
          <div class="text-xs">
            <span class="text-zinc-400/80 transition">
              {{ blog.author.name }}
            </span>
            <span class="mx-2 text-zinc-400/20">|</span>
            <span class="text-zinc-200/20">
              {{
                new Date(blog.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              }}
            </span>
          </div>
        </footer>
      </article>
    </div>
  </div>
</template>
