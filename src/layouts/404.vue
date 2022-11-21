<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main class="px-4 py-10 text-center text-teal-700 dark:text-gray-200">
    <div>
      <p class="my-8 text-4xl">
        <lucide-lightbulb class="inline-block" />
      </p>
    </div>
    <RouterView />
    <div class="my-8">
      <ButtonSecondary :label="t('action.back')" @click="router.back()" />
    </div>
  </main>
</template>
