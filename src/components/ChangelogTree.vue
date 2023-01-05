<script setup lang="ts">
import { changelogs } from "~/assets/data/changelogsList"
const { t } = useI18n()
const changelogCount = ref(5)
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <h1
        class="max-w-2xl my-4 text-3xl leading-none tracking-tighter text-center transition text-secondaryDark md:text-4xl lg:text-5xl"
      >
        {{ t("changelog.hero.heading") }}
      </h1>
      <p class="max-w-md my-4 text-xl tracking-tighter text-center md:w-3/5">
        {{ t("changelog.hero.subheading") }}
      </p>
    </div>
    <div class="flex flex-col mx-auto mt-8 grid-cols-9 md:grid">
      <div
        v-for="(changelog, index) in changelogs.slice(0, changelogCount)"
        :key="`changelog-${index}`"
        class="flex md:contents"
        :class="{ 'flex-row-reverse': changelog.placement === 'left' }"
      >
        <div
          :class="
            changelog.placement === 'left'
              ? 'col-start-1 col-end-5 ml-auto'
              : 'col-start-5 col-end-6 md:mx-auto relative mr-8'
          "
        >
          <ChangelogCard
            v-if="changelog.placement === 'left'"
            :changelog="changelog"
          />
          <ChangelogIndicator v-else />
        </div>
        <div
          :class="
            changelog.placement === 'left'
              ? 'col-start-5 col-end-6 md:mx-auto relative mr-8'
              : 'col-start-6 col-end-10 mr-auto'
          "
        >
          <ChangelogIndicator v-if="changelog.placement === 'left'" />
          <ChangelogCard v-else :changelog="changelog" />
        </div>
      </div>
    </div>
    <div
      class="flex items-center justify-center h-0 my-6 my-12 border-b border-dashed border-divider"
    >
      <ButtonPrimary
        v-if="changelogCount < changelogs.length"
        :label="t('action.show_more')"
        @click="changelogCount += 5"
      />
      <ButtonPrimary
        v-else
        :label="t('action.show_more')"
        to="https://github.com/hoppscotch/hoppscotch/releases"
      />
    </div>
  </div>
</template>
