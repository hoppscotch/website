<script setup lang="ts">
import { company } from '~/assets/data/menuCompany'
import { blogs } from '~/assets/data/menuBlogs'
const { t } = useI18n()
</script>

<template>
  <div>
    <div class="grid grid-cols-2 gap-2">
      <SmartItem
        v-for="(item, itemIndex) in company"
        :key="`item-${itemIndex}`"
        :to="item.link"
        :icon="item.icon"
        :label="t(item.name)"
      />
    </div>
    <div class="flex flex-col p-4 mt-2 transition rounded-lg bg-primaryDark">
      <h4 class="mb-2 font-medium border-b-1 border-dividerDark pb-2 rounded-sm">
        {{ t('header.menu.blog.title') }}
      </h4>
      <ul class="flex flex-col space-y-3">
        <li v-for="(blog, blogIndex) in blogs" :key="`blog-${blogIndex}`">
          <router-link :to="blog.link" class="group inline-flex items-center">
            <span class="mr-2 group-hover:text-secondaryDark">
              {{ t(blog.title) }}
            </span>
             <span class="transition group-hover:text-accent">
              <lucide-arrow-right />
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="https://blog.kooli.tech" class="group inline-flex items-center">
            <span class="mr-2 group-hover:text-secondaryDark">
              {{ t('header.menu.blog.read_more') }}
            </span>
            <span class="transition group-hover:text-accent">
              <lucide-arrow-right />
            </span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
