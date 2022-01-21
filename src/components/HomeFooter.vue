<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
import { footerNavigation } from '~/assets/data/footerNavigation'
const { t } = useI18n()
</script>

<template>
  <footer class="flex flex-col px-8 pt-8 ">
    <nav class="grid grid-cols-2 gap-4 md:grid-cols-5 py-8">
      <div class="flex flex-col space-y-2">
        <!-- <h5 class="flex my-2 text-sm font-bold text-secondaryLight">
          {{ t("logo") }}
        </h5> -->
        <div class="flex items-center space-x-5 my-2 text-secondaryLight footerLinks">
          <a href="https://github.com/hoppscotch/hoppscotch" class="hover:text-secondaryDark transition">
          <lucide-github/></a>
           <a href="https://hoppscotch.io/twitter" class="hover:text-secondaryDark transition">
          <lucide-twitter/></a>
         <a href="https://in.linkedin.com/company/hoppscotch" class="hover:text-secondaryDark transition">
          <lucide-linkedin/></a>
         <a href="https://hoppscotch.io/discord" class="hover:text-secondaryDark transition pt-1">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" stroke-width="1" ><path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/></svg></a>
        </div>
      </div>
      <div
        v-for="(category, categoryIndex) in footerNavigation" :key="`category-${categoryIndex}`"
        class="flex flex-col space-y-2"
      >
        <h5 class="flex my-2 text-sm font-bold text-secondaryLight">
          {{ t(category.name) }}
        </h5>
        <ul
          class="space-y-2"
        >
          <li
            v-for="(item, itemIndex) in category.links"
            :key="`item-${itemIndex}`"
            class="flex"
          >
            <router-link
              :to="item.link"
              class="flex text-xs text-secondaryLight hover:text-secondaryDark"
            >
              {{ t(item.name) }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="py-6 border-t-1 border-dividerDark flex justify-between">
      <div>
        <p class="text-sm font-bold text-secondaryLight">
          © {{ t("logo") }} - {{new Date().getFullYear()}}
        </p>
      </div>
       <div>
          <button class="inline-flex mx-2 outline-none" @click="toggleDark()">
            <lucide-moon v-if="isDark" />
            <lucide-sun v-else />
          </button>
        </div>
    </div>
  </footer>
</template>


