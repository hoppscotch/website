<script setup lang="ts">
import { company } from '~/assets/data/menuCompany'
import { blogs } from '~/assets/data/blogList'
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
        <h4 class="font-semibold text-secondaryDark">
          {{ t('header.menu.blog.title') }}
        </h4>
      </div>
      <ul class="flex flex-col text-xs space-y-2">
        <li v-for="(blog, blogIndex) in blogs.slice(0,3)" :key="`blog-${blogIndex}`">
          <router-link :to="`/company/blog/${blog.slug}`" class="inline-flex items-center transition text-secondaryLight hover:text-secondaryDark">
            <span class="mr-2">
              {{ t(blog.title) }}
            </span>
            <lucide-arrow-right />
          </router-link>
        </li>
        <li>
          <router-link to="/company/blog" class="inline-flex items-center transition text-secondaryLight hover:text-secondaryDark">
            <span class="mr-2">
              {{ t('header.menu.blog.read_more') }}
            </span>
            <lucide-arrow-right />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
