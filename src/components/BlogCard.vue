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
    class="col-span-6 h-128 interactive-hover-animation group"
    :class="blog.styles"
  >
    <div class="interactive-hover-contents">
      <div class="flex flex-col h-64 overflow-hidden rounded-t-xl">
        <img
          :src="`/assets/images/platforms/web/${isDark ? 'dark' : 'light'}-${
            blog.image
          }`"
          :alt="t(blog.title)"
          class="object-cover object-center w-full h-full transition transform group-hover:scale-105"
        />
      </div>
      <div class="flex flex-col flex-1 p-8">
        <h2
          class="flex items-center text-xl font-semibold gap-4 text-secondaryDark lg:text-2xl"
        >
          {{ t(blog.title) }}
        </h2>
        <div class="flex items-center my-4">
          <img
            class="w-8 h-8 rounded-full"
            :src="blog.author.image"
            :alt="blog.author.name"
          />
          <p class="flex flex-col ml-3 space-y-1">
            <span class="text-sm font-semibold text-secondaryDark">
              {{ t(blog.author.name) }}
            </span>
            <span class="text-xs text-secondaryLight opacity-60">
              {{ getComputedDate }}
            </span>
          </p>
        </div>
        <p
          class="flex w-11/12 max-w-xl my-2 opacity-75 leading-6 text-secondaryDark"
        >
          {{ t(blog.description) }}
        </p>
        <div class="relative w-full my-2 overflow-hidden faded-edge">
          <div class="flex w-full overflow-x-auto space-x-2 flex-nowrap">
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

<style scoped lang="scss">
.faded-edge::before,
.faded-edge::after {
  position: absolute;
  background-image: linear-gradient(
    to right,
    var(--color-primaryLight) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  content: "";
  height: 100%;
  width: 32px;
  z-index: 2;
  pointer-events: none;
}
.faded-edge::before {
  left: 0;
  top: 0;
}
.faded-edge::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
</style>
