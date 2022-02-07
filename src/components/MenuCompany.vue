<script setup lang="ts">
import { company } from '~/assets/data/menuCompany'
import { blogs } from '~/assets/data/menuBlogs'
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
      <h4 class="mb-2 font-semibold">
        {{ t('header.menu.blog.title') }}
      </h4>
      <ul class="flex flex-col text-xs space-y-2">
        <li v-for="(blog, blogIndex) in blogs" :key="`blog-${blogIndex}`">
          <router-link :to="blog.link" class="inline-flex items-center transition text-secondaryLight hover:text-secondaryDark">
            <span class="mr-2">
              {{ t(blog.title) }}
            </span>
            <lucide-arrow-right />
          </router-link>
        </li>
        <li>
          <router-link to="https://blog.hoppscotch.io" class="inline-flex items-center transition text-secondaryLight hover:text-secondaryDark">
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
