<script setup lang="ts">
import releases from "../../../data/releasesList.json"

const sortedReleases = computed(() => {
  try {
    const clonedReleases = [...releases]

    return clonedReleases.sort((a, b) => {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()

      return dateB - dateA
    })
  } catch (error) {
    console.error("Error sorting releases:", error)
    return []
  }
})
</script>

<template>
  <!-- Articles list -->
  <div class="mx-auto">
    <!-- Articles container -->
    <div class="grid gap-16 md:grid-cols-2 md:gap-y-20">
      <article
        v-for="(release, index) in sortedReleases"
        :key="`release-${index}`"
        class="flex h-full flex-col"
        :class="release.styles"
      >
        <header>
          <RouterLink
            :to="`/release/${release.slug}`"
            class="relative mb-4 block aspect-video w-full rounded md:rounded-xl"
          >
            <img
              loading="lazy"
              class="absolute inset-0 h-full w-full rounded object-cover transition duration-500"
              :src="`/images/${release.banner}`"
              width="352"
              height="198"
              :alt="release.title"
            />
          </RouterLink>
          <div class="mb-4">
            <ul class="-m-1 flex flex-wrap text-xs">
              <li
                v-for="(tag, tagIndex) in release.tags"
                :key="tagIndex"
                class="m-1"
              >
                <span
                  class="inline-flex text-center text-zinc-100/50 transition"
                >
                  {{ tag }}</span
                >
              </li>
            </ul>
          </div>
          <h4 class="mb-4 w-4/5">
            <RouterLink
              :to="`/release/${release.slug}`"
              class="text-zinc-200 transition hover:text-zinc-100"
            >
              {{ release.title }}
            </RouterLink>
          </h4>
        </header>
        <p class="mb-2 max-w-2xl text-zinc-400/80">
          {{ release.description }}
        </p>
        <footer class="mt-4 flex items-center">
          <img
            loading="lazy"
            class="mr-2 shrink-0 rounded-full"
            :src="`/images/${release.author.image}`"
            width="16"
            height="16"
            :alt="release.author.name"
          />
          <div class="text-xs">
            <span class="text-zinc-400/80 transition">
              {{ release.author.name }}
            </span>
            <span class="mx-2 text-zinc-400/20">|</span>
            <span class="text-zinc-200/20">
              {{
                new Date(release.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              }}
            </span>
          </div>
        </footer>
      </article>
    </div>
  </div>
</template>
