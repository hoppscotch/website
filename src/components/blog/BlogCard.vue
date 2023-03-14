<script setup lang="ts">
import { gradients } from "~/assets/data/gradients"

const props = withDefaults(
  defineProps<{
    blog: {
      title: string;
      description: string;
      slug: string;
      styles: string;
      dateOfPublish: string;
      author: {
        name: string;
        image: string;
      };
    };
  }>(),
  {}
)
const getComputedDate = computed(() => {
  const date = new Date(props.blog.dateOfPublish)
  const month = date.toLocaleString("default", { month: "long" })
  const day = date.getDate()
  const year = date.getFullYear()
  return `${month} ${day}, ${year}`
})
</script>

<template>
  <SmartLink
    :to="`/company/blog/${blog.slug}`"
    class="flex flex-col p-8 border border-divider rounded-xl"
    :class="blog.styles"
  >
    <div
      class="flex text-xl font-semibold tracking-tight text-transparent gap-4 bg-clip-text bg-gradient-to-br lg:text-2xl"
      :class="gradients.gray"
    >
      {{ blog.title }}
    </div>
    <div class="flex flex-1 my-4 opacity-75 text-secondaryLight">
      {{ blog.description }}
    </div>
    <div class="flex items-center mt-4">
      <img
        class="w-8 h-8 rounded-full"
        :src="blog.author.image"
        :alt="blog.author.name"
      />
      <div class="flex flex-col ml-3">
        <span class="font-semibold text-secondaryDark">
          {{ blog.author.name }}
        </span>
        <span class="text-secondaryLight opacity-60">
          {{ getComputedDate }}
        </span>
      </div>
    </div>
  </SmartLink>
</template>
