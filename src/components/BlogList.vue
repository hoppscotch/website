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
  <!-- Featured article -->
  <div class="mb-20">
    <article class="flex flex-col h-full">
      <header>
        <RouterLink
          to="/blog/sample-post"
          class="relative block mb-4 h-56 md:h-[32rem] rounded-xl"
        >
          <img
            loading="lazy"
            class="absolute inset-0 object-cover w-full h-full transition duration-500 rounded-xl"
            src="/images/blog-sample-post.png"
            width="352"
            height="198"
            alt="News 01"
          />
        </RouterLink>
        <div class="mb-4">
          <ul class="flex flex-wrap -m-1 text-xs">
            <li class="m-1">
              <span
                class="inline-flex text-center transition text-neutral-100/50"
                >Product</span
              >
            </li>
          </ul>
        </div>
        <h3 class="max-w-2xl mb-4">
          <RouterLink
            to="/blog/sample-post"
            class="transition text-neutral-200 hover:text-neutral-100"
          >
            The quick brown fox jumped over the lazy dog
          </RouterLink>
        </h3>
      </header>
      <p class="max-w-2xl mb-2 text-neutral-200/80">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <footer class="flex items-center mt-4">
        <img
          loading="lazy"
          class="mr-2 rounded-full shrink-0"
          src="/images/blog-author-01.jpg"
          width="16"
          height="16"
          alt="Author 01"
        />
        <div class="text-xs">
          <span class="transition text-neutral-200/50"> Anastasia Dan </span>
          <span class="mx-2 text-neutral-400/20">|</span>
          <span class="text-neutral-200/20">Jan 17, 2020</span>
        </div>
      </footer>
    </article>
  </div>
  <!-- Articles list -->
  <div class="mx-auto">
    <!-- Articles container -->
    <div class="grid gap-16 md:grid-cols-2 md:gap-y-20">
      <article
        v-for="(blog, index) in sortedBlogs"
        :key="`blog-${index}`"
        class="flex flex-col h-full"
      >
        <header>
          <RouterLink
            :to="`/blog/${blog.slug}`"
            class="relative block h-56 mb-4 md:h-80 rounded-xl"
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
                  class="inline-flex text-center transition text-neutral-100/50"
                >
                  {{ tag }}</span
                >
              </li>
            </ul>
          </div>
          <h4 class="max-w-2xl mb-4">
            <RouterLink
              :to="`/blog/${blog.slug}`"
              class="transition text-neutral-200 hover:text-neutral-100"
            >
              {{ blog.title }}
            </RouterLink>
          </h4>
        </header>
        <p class="max-w-2xl mb-2 text-neutral-200/80">
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
            <span class="transition text-neutral-200/50">
              {{ blog.author.name }}
            </span>
            <span class="mx-2 text-neutral-400/20">|</span>
            <span class="text-neutral-200/20">{{ blog.date }}</span>
          </div>
        </footer>
      </article>
    </div>
  </div>
</template>
