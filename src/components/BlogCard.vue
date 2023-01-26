<script setup lang="ts">
import { isDark } from "~/composables"
const props = withDefaults(
  defineProps<{
    blog: {
      title: string;
      description: string;
      slug: string;
      image: string;
      styles: string;
      dateOfPublish: string;
      author: {
        name: string;
        image: string;
      };
      tags: string[];
    };
  }>(),
  {}
)
const { t } = useI18n()

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
    class="h-128 col-span-6 interactive-hover-animation group"
    :class="blog.styles"
  >
    <div class="interactive-hover-contents">
      <div class="flex flex-col h-64 overflow-hidden rounded-t-xl">
        <img
          :src="`/assets/images/platforms/web/${isDark ? 'dark' : 'light'}-${
            blog.image
          }`"
          :alt="t(blog.title)"
          class="object-cover object-center w-full h-full transform transition group-hover:scale-105"
        />
      </div>
      <div class="flex flex-col flex-1 p-8">
        <div
          class="flex items-center text-xl font-semibold text-secondaryDark gap-4 lg:text-2xl"
        >
          {{ t(blog.title) }}
        </div>
        <div class="flex items-center my-4">
          <img
            class="w-8 h-8 rounded-full"
            :src="blog.author.image"
            :alt="blog.author.name"
          />
          <div class="flex flex-col ml-3 space-y-1">
            <span class="text-sm font-semibold text-secondaryDark">
              {{ t(blog.author.name) }}
            </span>
            <span class="text-xs text-secondaryLight opacity-60">
              {{ getComputedDate }}
            </span>
          </div>
        </div>
        <div class="flex w-11/12 max-w-xl my-2 opacity-75 text-secondaryDark">
          {{ t(blog.description) }}
        </div>
        <div class="relative w-full my-2 overflow-hidden faded-edge">
          <div class="flex w-full overflow-x-auto flex-nowrap space-x-2">
            <span
              v-for="(tag, tagIndex) in blog.tags"
              :key="`tag-${tag}-${tagIndex}`"
              class="px-3 py-2 my-1 text-xs rounded-full bg-primaryDark border-primaryDark border-1 whitespace-nowrap"
            >
              {{ t(tag) }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </SmartLink>
</template>

<style lang="scss" scoped>
.faded-edge::before,
.faded-edge::after {
  @apply transition;
  @apply absolute;
  @apply content-DEFAULT;
  @apply h-full;
  @apply w-8;
  @apply z-2;
  @apply pointer-events-none;

  background-image: linear-gradient(
    to right,
    var(--color-primaryLight) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
.faded-edge::before {
  @apply left-0;
  @apply top-0;
}
.faded-edge::after {
  @apply right-0;
  @apply top-0;

  transform: rotateZ(180deg);
}
</style>
