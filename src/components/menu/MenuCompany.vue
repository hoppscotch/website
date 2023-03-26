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
    <div class="flex flex-col p-4 mt-2 rounded-lg bg-primaryDark">
      <div class="flex items-center mb-2">
        <div class="font-semibold text-secondaryDark">
          {{ t("header.menu.blog.title") }}
        </div>
      </div>
      <ul class="flex flex-col space-y-2">
        <li
          v-for="(blog, blogIndex) in blogs.slice(0, 2)"
          :key="`blog-${blogIndex}`"
        >
          <SmartLink
            :to="`/company/blog/${blog.slug}`"
            class="inline-flex items-center transition text-secondaryLight hover:text-secondaryDark"
          >
            {{ blog.title }}
          </SmartLink>
        </li>
        <li>
          <SmartLink
            to="/company/blog"
            class="inline-flex items-center transition text-secondaryLight hover:text-secondaryDark"
          >
            {{ t("header.menu.blog.read_more") }}
          </SmartLink>
        </li>
      </ul>
    </div>
  </div>
</template>
