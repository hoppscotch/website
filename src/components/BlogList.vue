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
        class="flex flex-col h-full"
        :class="blog.styles"
      >
        <header>
          <RouterLink
            :to="`/blog/${blog.slug}`"
            class="relative block w-full mb-4 aspect-video rounded-xl"
          >
            <img
              loading="lazy"
              class="absolute inset-0 object-cover w-full h-full transition duration-500 rounded-xl"
              :src="`/images/${blog.banner}`"
              width="352"
              height="198"
              :alt="blog.title"
            />
          </RouterLink>
          <div class="mb-4">
            <ul class="flex flex-wrap -m-1 text-xs">
              <li
                v-for="(tag, tagIndex) in blog.tags"
                :key="tagIndex"
                class="m-1"
              >
                <span
                  class="inline-flex text-center transition text-zinc-100/50"
                >
                  {{ tag }}</span
                >
              </li>
            </ul>
          </div>
          <h4 class="w-4/5 mb-4">
            <RouterLink
              :to="`/blog/${blog.slug}`"
              class="text-zinc-200 transition hover:text-zinc-100"
            >
              {{ blog.title }}
            </RouterLink>
          </h4>
        </header>
        <p class="max-w-2xl mb-2 text-zinc-400/80">
          {{ blog.description }}
        </p>
        <footer class="flex items-center mt-4">
          <img
            loading="lazy"
            class="mr-2 rounded-full shrink-0"
            :src="`/images/${blog.author.image}`"
            width="16"
            height="16"
            :alt="blog.author.name"
          />
          <div class="text-xs">
            <span class="transition text-zinc-400/80">
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
