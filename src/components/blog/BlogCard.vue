<script setup lang="ts">
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
    class="flex flex-col p-8 border border-divider rounded-xl"
    :class="blog.styles"
  >
    <div
      class="flex items-center text-xl font-semibold gap-4 text-secondaryDark lg:text-2xl"
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
    <div
      class="flex flex-1 w-11/12 max-w-xl my-2 opacity-75 text-secondaryDark"
    >
      {{ t(blog.description) }}
    </div>
  </SmartLink>
</template>
