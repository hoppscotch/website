<script setup lang="ts">
import { company } from '~/assets/data/menuCompany'
import { blogs } from '~/assets/data/menuBlogs'
// const { t } = useI18n()
</script>

<template>
  <div>
    <div class="grid grid-cols-2">
      <SmartItem
        v-for="(item, itemIndex) in company"
        :key="`item-${itemIndex}`"
        :to="item.link"
        :icon="item.icon"
        :label="item.name"
      />
    </div>
    <div class="flex flex-col p-4 mt-2 transition rounded-lg bg-primaryDark">
      <h4 class="mb-2 font-semibold">
        Recent blogs
      </h4>
      <ul class="flex flex-col space-y-2">
        <li v-for="(blog, blogIndex) in blogs" :key="`blog-${blogIndex}`">
          <router-link :to="blog.link" class="link">
            {{ blog.title }} <i class="material-icons">chevron_right</i>
          </router-link>
        </li>
        <li>
          <router-link to="https://blog.kooli.tech" class="link">
            Read all blogs <i class="material-icons">chevron_right</i>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
