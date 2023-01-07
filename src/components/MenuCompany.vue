<script setup lang="ts">
import { company } from "~/assets/data/menuCompany"
import { blogs } from "~/assets/data/blogList"
const { t } = useI18n()
</script>

<template>
  <div>
    <div class="grid grid-cols-2">
      <SmartItem
        v-for="(item, itemIndex) in company"
        :key="`item-${itemIndex}`"
        :to="item.link"
        :icon="item.icon"
        :label="t(item.name)"
      />
    </div>
    <div class="bg-primaryDark rounded flex flex-col mt-2 p-4">
      <div class="flex mb-2 items-center">
        <h4 class="font-semibold text-secondaryDark">
          {{ t("header.menu.blog.title") }}
        </h4>
      </div>
      <ul class="flex flex-col space-y-2">
        <li
          v-for="(blog, blogIndex) in blogs.slice(0, 2)"
          :key="`blog-${blogIndex}`"
        >
          <SmartLink
            :to="`/company/blog/${blog.slug}`"
            class="text-secondaryLight transition inline-flex items-center hover:text-secondaryDark"
          >
            {{ t(blog.title) }}
            <lucide-arrow-right class="ml-2" />
          </SmartLink>
        </li>
        <li>
          <SmartLink
            to="/company/blog"
            class="text-secondaryLight transition inline-flex items-center hover:text-secondaryDark"
          >
            {{ t("header.menu.blog.read_more") }}
            <lucide-arrow-right class="ml-2" />
          </SmartLink>
        </li>
      </ul>
    </div>
  </div>
</template>
