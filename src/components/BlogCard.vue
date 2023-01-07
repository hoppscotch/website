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
      <div class="rounded-t-xl flex flex-col h-64 overflow-hidden">
        <img
          :src="`/assets/images/platforms/web/${isDark ? 'dark' : 'light'}-${
            blog.image
          }`"
          :alt="t(blog.title)"
          class="h-full object-cover object-center w-full transform transition group-hover:scale-105"
        />
      </div>
      <div class="flex flex-col flex-1 p-8">
        <h2
          class="flex font-semibold text-xl text-secondaryDark gap-4 items-center lg:text-2xl"
        >
          {{ t(blog.title) }}
        </h2>
        <div class="flex my-4 items-center">
          <img
            class="rounded-full h-8 w-8"
            :src="blog.author.image"
            :alt="blog.author.name"
          />
          <p class="flex flex-col space-y-1 ml-3">
            <span class="font-semibold text-sm text-secondaryDark">
              {{ t(blog.author.name) }}
            </span>
            <span class="text-xs text-secondaryLight opacity-60">
              {{ getComputedDate }}
            </span>
          </p>
        </div>
        <p class="flex max-w-xl my-2 text-secondaryDark opacity-75 w-11/12">
          {{ t(blog.description) }}
        </p>
        <div class="my-2 w-full relative overflow-hidden faded-edge">
          <div class="flex flex-nowrap space-x-2 w-full overflow-x-auto">
            <span
              v-for="(tag, tagIndex) in blog.tags"
              :key="`tag-${tag}-${tagIndex}`"
              class="bg-primaryDark border-primaryDark rounded-full border-1 my-1 text-xs py-2 px-3 whitespace-nowrap"
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
