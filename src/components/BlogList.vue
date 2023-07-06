<template>
  <!-- Featured article -->
  <div class="mb-20">
    <article class="flex flex-col h-full" data-aos="fade-up">
      <header>
        <RouterLink
          to="/blog/sample-post"
          class="relative block mb-4 h-56 md:h-[32rem] rounded-xl"
        >
          <img
            class="absolute inset-0 object-cover w-full h-full transition duration-500 rounded-xl"
            src="/images/blog-sample-post.png"
            width="352"
            height="198"
            alt="News 01"
          />
        </RouterLink>
        <div class="mb-4">
          <ul class="flex flex-wrap -m-1 text-xs font-medium">
            <li class="m-1">
              <span class="inline-flex text-center transition text-slate-500"
                >Product</span
              >
            </li>
          </ul>
        </div>
        <h3 class="max-w-2xl mb-4 h3">
          <RouterLink
            to="/blog/sample-post"
            class="transition text-slate-200 hover:text-slate-100"
            >The quick brown fox jumped over the lazy dog</RouterLink
          >
        </h3>
      </header>
      <p class="max-w-2xl mb-2 text-slate-300 grow">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <footer class="flex items-center mt-4">
        <img
          class="mr-2 rounded-full shrink-0"
          src="/images/blog-author-01.jpg"
          width="16"
          height="16"
          alt="Author 01"
        />
        <div class="text-xs font-medium">
          <span class="transition text-slate-400"> Anastasia Dan </span>
          <span class="mx-2 text-slate-800">|</span>
          <span class="text-slate-600">Jan 17, 2020</span>
        </div>
      </footer>
    </article>
  </div>
  <!-- Articles list -->
  <div class="mx-auto">
    <!-- Articles container -->
    <div class="grid items-start gap-16 md:grid-cols-2 md:gap-y-20">
      <article
        v-for="(blog, index) in sortedBlogs"
        :key="`blog-${index}`"
        class="flex flex-col h-full"
        data-aos="fade-up"
      >
        <header>
          <RouterLink
            :to="`/blog/${blog.slug}`"
            class="relative block h-56 mb-4 md:h-80 rounded-xl"
          >
            <img
              class="absolute inset-0 object-cover w-full h-full transition duration-500 rounded-xl"
              :src="`/images/${blog.banner}`"
              width="352"
              height="198"
              :alt="blog.title"
            />
          </RouterLink>
          <div class="mb-4">
            <ul class="flex flex-wrap -m-1 text-xs font-medium">
              <li
                v-for="(tag, tagIndex) in blog.tags"
                class="m-1"
                :key="tagIndex"
              >
                <span class="inline-flex text-center transition text-slate-500">
                  {{ tag }}</span
                >
              </li>
            </ul>
          </div>
          <h4 class="max-w-2xl mb-4 h4">
            <RouterLink
              :to="`/blog/${blog.slug}`"
              class="transition text-slate-200 hover:text-slate-100"
            >
              {{ blog.title }}
            </RouterLink>
          </h4>
        </header>
        <p class="max-w-2xl mb-2 text-slate-300 grow">
          {{ blog.description }}
        </p>
        <footer class="flex items-center mt-4">
          <img
            class="mr-2 rounded-full shrink-0"
            :src="`/images/${blog.author.image}`"
            width="16"
            height="16"
            :alt="blog.author.name"
          />
          <div class="text-xs font-medium">
            <span class="transition text-slate-400">
              {{ blog.author.name }}
            </span>
            <span class="mx-2 text-slate-800">|</span>
            <span class="text-slate-600">{{ blog.date }}</span>
          </div>
        </footer>
      </article>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue"
import blogs from "../data/blogList.json"
const sortedBlogs = computed(() =>
  blogs.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
)
</script>
